import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(public auth: AuthService ,
    public userapi : UserService ,
    public router: Router ,
    public fb: FormBuilder,
    public upload : UploadService,private http: HttpClient
     )
  { this.userapi.getAll().subscribe((data: any)=>

    {this.users = data ;   });


  }

    ngOnInit(): void {
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
            bookingsInfo: [
                {
                    icon: 'bx bx-map',
                    title: 'Address',
                    text: '40 Journal Square, NG USA',
                },
                {
                    icon: 'bx bx-calendar',
                    title: 'Date',
                    text: '20/05/2020',
                },

            ]
        }


}
