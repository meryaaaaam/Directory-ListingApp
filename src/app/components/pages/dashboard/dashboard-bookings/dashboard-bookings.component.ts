import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UploadService } from 'src/app/shared/api/upload.service';
import { UserService } from 'src/app/shared/api/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
    selector: 'app-dashboard-bookings',
    templateUrl: './dashboard-bookings.component.html',
    styleUrls: ['./dashboard-bookings.component.scss']
})
export class DashboardBookingsComponent implements OnInit {
  users : any ;
  name: string;
  logo: any;
  user: User =new User;
  data:any   ;

  constructor(public auth: AuthService ,
    public userapi : UserService ,
    public router: Router ,
    public fb: FormBuilder,
    public upload : UploadService,private http: HttpClient
     )
  { this.userapi.getAllListUser().subscribe((data: any)=>

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


    Content =
        {
            customerImg: 'assets/img/user1.jpg',
            customerName: 'James Anderson',
            customerNumber: '+214 4455 6521',
            customerEmail: 'hello@james.com',
            title: 'Farmis Hotel & Restaurant',
            bookingsStatus: 'Pending',
            pendingApprovedCanceled: 'pending',

        }


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
