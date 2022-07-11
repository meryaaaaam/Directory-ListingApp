import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterService } from 'primeng/api';
import { element } from 'protractor';
import { Search } from 'src/app/models/service/search';
import { Service } from 'src/app/models/service/service';
import { User } from 'src/app/models/user/user';
import { CategoryService } from 'src/app/shared/api/category1.service';
import { SearchService } from 'src/app/shared/api/search.service';
import { UploadService } from 'src/app/shared/api/upload.service';
import { UserService } from 'src/app/shared/api/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';


interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-profile-test',
  templateUrl: './profile-test.component.html',
  styleUrls: ['./profile-test.component.scss']
})
export class ProfileTestComponent implements OnInit {
  customers: any[];

    selectedCustomers: any[];

    representatives: any[];

    statuses: any[];
    users : any ;

    loading: boolean = true;

    activityValues: number[] = [0, 100];
  customerService: any;
  logo: string;
  name: string;

    constructor(
      public auth: AuthService ,
      public userapi : UserService ,
      public router: Router ,
      public fb: FormBuilder,
      public upload : UploadService,
      public http: HttpClient
       )
       {  this.userapi.getAllActifUsers().subscribe((data: any)=>

        {this.users = data ;

         console.log(this.users);
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

        this.userapi.getAllActifUsers().subscribe((data: any)=>

            {this.users = data ;
              console.log(this.users)
            this.customers = this.users;
            this.loading = false;

            console.log(this.customers);
          //  this.customers.forEach(customer => customer.date = new Date(customer.date));
        });

        this.representatives = [
            {name: "Amy Elsner", image: 'amyelsner.png'},
            {name: "Anna Fali", image: 'annafali.png'},
            {name: "Asiya Javayant", image: 'asiyajavayant.png'},
            {name: "Bernardo Dominic", image: 'bernardodominic.png'},
            {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
            {name: "Ioni Bowcher", image: 'ionibowcher.png'},
            {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
            {name: "Onyama Limba", image: 'onyamalimba.png'},
            {name: "Stephen Shaw", image: 'stephenshaw.png'},
            {name: "Xuxue Feng", image: 'xuxuefeng.png'}
        ];

        this.statuses = [
            {label: 'Unqualified', value: 'unqualified'},
            {label: 'Qualified', value: 'qualified'},
            {label: 'New', value: 'new'},
            {label: 'Negotiation', value: 'negotiation'},
            {label: 'Renewal', value: 'renewal'},
            {label: 'Proposal', value: 'proposal'}
        ]
    }


  }
