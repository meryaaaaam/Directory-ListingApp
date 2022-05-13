import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  registerForm: FormGroup;



  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });

    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
    });
  }
  ngOnInit(): void {
  }

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
    this.authService.signin(form).subscribe(
      (result) => {
        this.responseHandler(result);
        console.log('authenticated') ;

        this.authState.setAuthState(true);
        this.loginForm.reset();
       this.alertWithSuccess() ;
       // this.router.navigate(['user/profile']);
        this.router.navigateByUrl('profile');
      },
      (error) => {
        this.alertWithError();
        this.errors = error.error;
      }
    );
  }

  signup() {
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        const data = result;

        const data1 : any = {email: data.email , password:data.password}

        this.registerForm.reset();
        this.alertWithSuccess() ;

        /*this.loginAfterRegister(data1);
        console.log(result);*/

      },
      (error) => {
        this.errors = error.error;
        this.alertWithError();
      },



    );
  }

  login() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);


        this.authState.setAuthState(true);
        this.loginForm.reset();
       this.alertWithSuccess() ;
       // this.router.navigate(['user/profile']);
        this.router.navigateByUrl('profile'); console.log('authenticated') ;
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



}
