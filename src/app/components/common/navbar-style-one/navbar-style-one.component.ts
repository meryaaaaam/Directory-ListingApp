import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';


@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss'],
  providers: [MessageService]

})
export class NavbarStyleOneComponent implements OnInit {
  loginForm: FormGroup;
  errors:any = null;
  role : any ;

  registerForm: FormGroup;
  user:User = new User ;
  link: string;

  constructor(public auth: AuthService ,
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private messageService: MessageService
  ) {
    this.auth.profileUser().subscribe((data: any)=>

    {this.user = data ;   console.log(this.user.role) ;


      if (this.user.role=='Admin')
      {
        this.link ='/profile' ;
      }
      else if (this.user.role =='Company')
      {
        this.link ='/entreprise/profile' ;
      }
      else {
        this.link ='/professionnel/profile' ;
      }
    //  console.log(this.link) ;

    }

    );





    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });

    this.registerForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
      role: [''],
      isActive: 0,
      isTermsAccepted: 0,
    });

  }
  ngOnInit(){




  }

  getroles()
  {this.authService.roles().subscribe(
    (result) => {
     // console.log(result) ;
       this.role = result ;
    },
    (error) => {

     // console.log(error.errors);
    }
  );}

  showSuccess(detail) {
    this.messageService.add({severity:'success', summary: 'Success', detail: detail});
  }

  showInfo(detail) {
    this.messageService.add({severity:'info', summary: 'Info', detail: detail});
  }

  showWarn(detail) {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: detail});
  }

  showError(detail) {
    this.messageService.add({severity:'error', summary: 'Error', detail: detail});
  }

    // Handle response
    responseHandler(data:any) {
      this.token.handleData(data.access_token);
      this.token.saveUser(data.user) ;
      this.token.saveToken(data.access_token);
     }

    ischecked = false ;
    pro=false ; company = false;
    checked = false;
    indeterminate = false;
    labelPosition: 'before' | 'after' = 'after';
    disabled = false;



  loginAfterRegister(data) {


    this.authService.signin(data).subscribe(
      (result) => {
        this.responseHandler(result);
        data = result.user.role ;
        this.loginForm.reset();
        if(data == "Pro")
        this.router.navigateByUrl('professionnel/profile');
        else if(data == "Company")
        this.router.navigateByUrl('entreprise/profile');
        else
        { this.router.navigateByUrl('profile');}
      },
      (error) => {
         this.showError('Veuillez vérifier votre adresse email ou votre mot de passe')
        this.errors = error.error;
      },
      () => {



       }
     // () => { window.location.reload();}
    );
  }



  login() {
    let data ;
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
        data = result.user.role ;
        this.loginForm.reset();
        if(data == "Pro")
        this.router.navigateByUrl('professionnel/profile');
        else if(data == "Company")
        this.router.navigateByUrl('entreprise/profile');
        else
        { this.router.navigateByUrl('profile');}
      //  this.authState.setAuthState(true);
      },
      (error) => {
         this.showError('Veuillez vérifier votre adresse email ou votre mot de passe')
        this.errors = error.error;
      },


    );
  }


  signup() {
    //console.log(this.registerForm.value.email , this.registerForm.value.password);
    this.loginForm.value['email'] = this.registerForm.value.email  ;
    this.loginForm.value['password'] = this.registerForm.value.password  ;
    console.log(this.loginForm.value );

     this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        const data = result;
        this.showSuccess('Votre compte a été créer avec success ')
        this.registerForm.reset();
        console.log(result);
              this.loginAfterRegister(this.loginForm.value);
      },
      (error) => {
        this.errors = error.error;
        this.showError('Veuillez vérifier votre adresse email ou votre mot de passe')
        console.log(this.errors) ;
       },



  );
  }


}
