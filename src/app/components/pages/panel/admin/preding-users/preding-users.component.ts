import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UploadService } from 'src/app/shared/api/upload.service';
import { UserService } from 'src/app/shared/api/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-preding-users',
  templateUrl: './preding-users.component.html',
  styleUrls: ['./preding-users.component.scss']
})
export class PredingUsersComponent implements OnInit {

  users : any ;
  name: string;
  logo: any;
  user: User =new User;
  data:any   ;
  image = 'https:/backbottin.groupe3737.com/storage/image/';

  constructor(
    public auth: AuthService ,
    public userapi : UserService ,
    public router: Router ,
    public fb: FormBuilder,
    public upload : UploadService,
    public http: HttpClient
     )
     {  this.userapi.getAllPredingUsers().subscribe((data: any)=>

      {this.users = data ;


        if (this.users.role == 'Pro')
           {this.name = this.users.firstname + ' ' + this.users.lastname ;}
        else if (this.users.role == 'Company')
           { this.name = this.users.companyname ;}
        else {this.name = this.users.username ;}

        console.log(this.name) ;
      });

  }

  ngOnInit(): void {
    this.logo="assets/img/logo/default.png" ;
  }

  breadcrumb = [
      {
          title: 'Liste des utilisateurs',
          subTitle: 'Dashboard'
      }
  ]



      Approved(id)
      {


        this.userapi.get(id).subscribe(
          response => {
            this.data = response ;

              this.user.isActive = true ;

              this.userapi.isActive(id , this.user).subscribe(
                response => { let data = response ; console.log(data) ;}

              )


          },
          error => {
            console.log(error);
          });
      }


      reject(id)
      {

        this.userapi.get(id).subscribe(
          response => {
            this.data = response ;

              this.user.isActive = false ;

              this.userapi.isActive(id , this.user).subscribe(
                response => { let data = response ; console.log(data) ;}

              )


          },
          error => {
            console.log(error);
          });

      }
}

