import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss']
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
    private authState: AuthStateService
  ) {
    this.auth.profileUser().subscribe((data: any)=>

    {this.user = data ;   console.log(this.user.role) ;


      if (this.user.role=='Admin')
      {
        this.link ='profile' ;
      }
      else if (this.user.role =='Company')
      {
        this.link ='entreprise/profile' ;
      }
      else {
        this.link ='professionnel/profile' ;
      }
      console.log(this.link) ;

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
      console.log(result) ;
       this.role = result ;
    },
    (error) => {

      console.log(error.errors);
    }
  );}
 alertWithSuccess(){
    Swal.fire('Yre authentificated succesfully!', '', 'success')
  }

  alertWithError()
  {Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong! please verify your information',
   // footer: '<a href="">Why do I have this issue?</a>'
  })}

  loginAfterRegister(form:any) {
  //  this.getroles() ;
    this.authService.signin(form).subscribe(
      (result) => {
        this.responseHandler(result);
      //  console.log(result.role)
        console.log() ;

        this.authState.setAuthState(true);

        this.loginForm.reset();
       this.alertWithSuccess() ;
       // this.router.navigate(['user/profile']);

      },
      (error) => {
        this.alertWithError();
        this.errors = error.error;
        console.log(this.errors);
      }
    );
  }

  signup() {
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        const data = result;

        const data1 : any = {email: data.email , password:data.password, isActive:0}

        this.registerForm.reset();
        this.alertWithSuccess() ;

        /*this.loginAfterRegister(data1);
        console.log(result);*/

      },
      (error) => {
        this.errors = error.error;
        console.log(this.errors) ;
        this.alertWithError();
      },



    );
  }

  login() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
        console.log(result);
        console.log('c est un '+result.user.role);
     let data = result.user.role ;

        this.authState.setAuthState(true);
        this.loginForm.reset();
       this.alertWithSuccess() ;
       // this.router.navigate(['user/profile']);
       if(data == "Pro")
       this.router.navigateByUrl('professionnel/profile');
       else if(data == "Company")
       this.router.navigateByUrl('entreprise/profile');
       else
       { this.router.navigateByUrl('profile');}

       console.log(this.role) ;
      },
      (error) => {
        this.alertWithError();
        this.errors = error.error;
      }
    );
  }




  // Handle response
  responseHandler(data:any) {
    this.token.handleData(data.access_token);
  }

  ischecked = false ;
  pro=false ; company = false;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

}
