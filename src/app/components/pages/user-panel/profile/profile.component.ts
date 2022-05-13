import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from 'src/app/models/user/password';
import { User } from 'src/app/models/user/user';
import { ApiService } from 'src/app/shared/api/api.service';
import { UserService } from 'src/app/shared/api/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {



 public user!: User   ;

 public password!: Password ;
 public currentuser : any = null;
    passwordForm: FormGroup;
  //  userForm: FormGroup;
  constructor(public auth: AuthService ,
    public userapi : UserService ,
    public router: Router ,
    public fb: FormBuilder,
     )
  { this.auth.profileUser().subscribe((data: any)=>

    {this.user = data ;   });

    this.passwordForm = this.fb.group({
      password_current: [''],
      new_password: [''],
      new_confirm_password: [''],
    });





  }

  ngOnInit(): void {
   // this.currentuser = this.user ;
  }

  breadcrumb = [ {  title: 'My Profile',subTitle: 'User Panel'}]

  updateprofile()
  {
    const data : any = {name: this.user.name , email:this.user.email}
  let currentuser = this.user ;

    this.userapi.update(this.user.id , currentuser) .subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);
      });
  }

  updatepassword()
  {
      this.auth.changepassword(this.passwordForm.value).
      subscribe( response => {

        console.log(response);
      },
      error => {
        console.log(error);
      });
  }



}
