import { Component, OnInit } from '@angular/core';
 import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';

import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Password } from 'src/app/models/user/password';
import { User } from 'src/app/models/user/user';
import { ApiService } from 'src/app/shared/api/api.service';
import { CategoryService } from 'src/app/shared/api/category.service';
import { UploadService } from 'src/app/shared/api/upload.service';
import { UserService } from 'src/app/shared/api/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
//import Swal from 'sweetalert2';
import { FilterService, MessageService, SelectItem, SelectItemGroup } from 'primeng/api';
import { Search } from 'src/app/models/service/search';
import { Adress } from 'src/app/models/user/adress';
import { UserAdress } from 'src/app/models/user/useradress';
import { State } from 'src/app/models/user/state';


export class result {

  user_id: any;
  services: any[];

}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {
  uploadedFiles: any[] = [];
  logo:any;
  fileData: File = null;
  Disabled: boolean;
  categories: any;
  sub: any;
  filteredSub: any[];
  search: any;
  type: any;
  datastates : any ;
  states : State[];
  searchsub : Search;
  searchcat : Search  ;
  searchserv : Search ;


  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
}
  public c : any;
  public users: UserAdress  = new UserAdress ;
  public user: any   ;

 public image : any;

 public password!: Password ;
 public currentuser : any = null;
 public passwordForm: FormGroup;
 public searchForm: FormGroup;
 public usertwoform : FormGroup;
 private  notifier: NotifierService;
 selectedCountries: any[];
 selectedServices: any[];
 selectedCategories: any[];

 filteredCountries: any[];
 filteredServices: any[];
 data :any;

  serach : any ;

 //selectedCountry: Country;
 selectedCountry: string;
 selcttedService : any;
 selcttedcategory : any;
 selcttedsubcategory : any;

 countries: any[];
 services : any;
 servicesArray : any[] ;
  lang : any ;
 adress : Adress = new Adress ; state : any;

 formsearch : FormGroup ;

 selectedCity3: string;
 groupedCities: SelectItemGroup[];
 groupedServices: SelectItemGroup[];
 groupeddServices: any[];


 result : any ;
 servresult : any ;
 selecteds: any;
 Services : any;
 ServicesResult : result = new result ;

 userservice : any;




 public line = [
          {title:"Affaires"},
          {title:"Résidence"},
          {title:"Cellulaire"},
          {title:"Autre"}

 ];




 public userForm: FormGroup;
  constructor(public auth: AuthService ,
    public userapi : UserService ,
    public router: Router ,
    public fb: FormBuilder,
    public upload : UploadService,
    private http: HttpClient ,
    public category : CategoryService,
    public notifierService: NotifierService,
    private filterService: FilterService ,
    private messageService: MessageService)
  {

    this.notifier = notifierService;

    this.auth.profileUser().subscribe(data=>

    {this.user = data ; this.users = data ; this.type = this.user.Line_type ; console.log(this.user) ;

    if (this.user.logo)
    {this.image = `http://localhost:8000/storage/image/${this.user.logo}`}
    else {this.image = 'assets/img/Logo_e.jpg'}

    // console.log(this.image) ;

    });

    let x = this.users;
    console.log(x) ;


    this.passwordForm = this.fb.group({
      password_current: [''],
      new_password: [''],
      new_confirm_password: [''],
    });

    this.searchForm = this.fb.group({
      label: [''],

    });


    this.usertwoform = new FormGroup(
      {
       firstname: new FormControl('' , {validators: Validators.max(12) , updateOn:'submit'}),
       email:  new FormControl('' , {validators: Validators.email , updateOn:'submit'}),
       lastname: new FormControl('' , {validators: Validators.max(12) , updateOn:'submit'}),
       username: new FormControl('' , {validators: Validators.max(12) , updateOn:'submit'}),
       phone: new FormControl('' , {validators: Validators.max(12) , updateOn:'submit'}),
       adresse: new FormControl('' , {validators: Validators.max(12) , updateOn:'submit'}),
       website: new FormControl('' , {validators: Validators.max(12) , updateOn:'submit'}),
       LinkedIn:new FormControl('' , {validators: Validators.max(12) , updateOn:'submit'}),
       langue: new FormControl('' , {validators: Validators.max(12) , updateOn:'submit'}),
       isEmailActive: new FormControl('' ),
      }
    );

    this.category.getAllServices() .subscribe(
      response => {  this.services = response ;  },
      error => { console.log(error);  });

      this.category.getAllSubCategory() .subscribe(
        response => {  this.sub = response ;  },
        error => { console.log(error);  });


        this.lang = [

          {name: 'germany', code: 'DE'},
          {name: 'japan', code: 'JP'},
          {name: 'usa', code: 'US'}
      ];

        this.countries = [

          {name: 'germany', code: 'DE'},
          {name: 'japan', code: 'JP'},
          {name: 'usa', code: 'US'}
      ];


  }


  breadcrumb = [ {  title: 'My Profile',subTitle: 'User Panel'}]

  // createform(){
  //   this.form =this.fb.group({
  //     image : [null, Validators.required]
  //   })
  // }


  ngOnInit()   {
    //this.createform();
    this.category.getAllCategories().subscribe(
      response => {
        this.categories = response ;
       // console.log(this.categories) ;



      }) ;

      this.auth.Profile().subscribe(
        (data: any)=> {
          this.user = data ;
          this.userapi.getservice(this.user.id).subscribe(
            data => {this.userservice = data ; }
          )


        //  console.log(this.user.role)
        });

      this.userapi.getAllStates().subscribe(
        response => {
          this.datastates = response ;
          this.states = this.datastates  ;
      //    console.log(this.states)  ;

        }) ;






}

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



filedata:any;

fileEvent(e){
  this.filedata = e.target.files[0];
  console.log(this.filedata);
}

  updateprofile()
  {

   this.currentuser = this.user ;

    this.userapi.updateAdress(this.user.id , this.currentuser) .subscribe(
      response => {
        let c :any ;
        // console.log(response);
         c= response ;
          if(!c.data)
         {this.showError(c.message) ;}
         else {
          this.showSuccess(c.message) ;          }

      },
      error => {
        console.log(error);

      });

  }


  updatepassword()
  {
      this.auth.changepassword(this.passwordForm.value).
      subscribe( response => {
       // this.successAlert() ;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }



updateprofile2()
  {
   // const data : any = {name: this.user.username , email:this.user.email}
   //this.currentuser = this.user ;
   const formData =new FormData();
   formData.append("img",this.filedata,this.filedata.name);
   console.log(formData);
   //this.currentuser.logo=formData ;
    this.userapi.updateAdress2(this.user.id , formData) .subscribe(
      response => {
        let c :any ;
        // console.log(response);
         this.data= response ;
         c=this.data.message ;
         console.log(this.data);
          if(!this.data)
         {this.showError(c) ;}
         else {
          this.showSuccess(c) ;          }

      },
      error => {
        console.log(error);

      },
      () => {  window.location.reload();}

      );

  }


filteredGroups : any[] ;

/*filterGroupedServices(event) {
  let query :any;
  let tes = new Search ;
  tes.label="a" ;

  this.category.serachService(tes).subscribe(
    response => {
      query = response ;

      console.log('query        '+query);

    },
    error => {
      console.log(error);
    });

  let filteredGroups = [];

  for (let optgroup of this.c) {
      let filteredSubOptions = this.filterService.filter(optgroup.label, ['label'], query, "contains");
      if (filteredSubOptions && filteredSubOptions.length) {
          filteredGroups.push({
              label: optgroup.label,
              items: filteredSubOptions

          });
      }
  }
  console.log(query) ;
  this.filteredGroups = filteredGroups;
  console.log(query) ;
}



filterServices(event) {
  //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
  let filtered : any[] = [];
  let query = event.query;
  for(let i = 0; i < this.services.length; i++) {
      let serv = this.services[i];
      console.log(serv) ;
      if (serv.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(serv);} }


       this.filteredServices = filtered;



      }





filterSubCategories(event) {
let x ;
 this.selcttedcategory ;

 this.category.getSubByCat( this.selcttedcategory.label).subscribe(
  response => {
     x = response ;
    console.log( x) ;
  }) ;
  //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        let query = event.query;
        for(let i = 0; i < this.sub.length; i++) {
            let sub = this.sub[i];
           // console.log(sub) ;
            if (sub.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(sub);} }
             this.filteredSub = filtered;

            }

*/


filterSubCategories(event) {

  let error  ;
  // console.log( this.selcttedcategory) ;

   this.category.getSubByCat( this.selcttedcategory.label).subscribe(
      response => {
        this.result= response ;
       //  console.log( this.result) ;
       },
       error => {error = error.errors;}

      ) ;

        //  console.log(this.sub);
          //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
          let filtered : any[] = [];
          let query = event.query;
          for(let i = 0; i < this.result.length; i++) {
              let sub = this.result[i];
             // console.log(sub) ;
              if (sub.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                  filtered.push(sub);} }


               this.filteredSub = filtered;



              }


              filterServices(event) {
                console.log( this.selcttedsubcategory) ;
                let sub ; let result : any[] = [] ;
                for(let i = 0; i < this.selcttedsubcategory.length; i++) {
                    sub = this.selcttedsubcategory[i].label ;
                    result.push(sub) ;
                }

                  this.category.getservBysub(result).subscribe(
                    response => {
                      this.servresult= response ;
                     },
                     error => {error = error.errors;}

                    ) ;

                //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
                let filtered : any[] = [];
                let query = event.query;
                for(let i = 0; i <  this.servresult.length; i++) {
                    let serv =  this.servresult[i];
                   // console.log(serv) ;
                    if (serv.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                        filtered.push(serv);} }
                     this.filteredServices = filtered;
                    }


        AddServices()
        {
          let message ;
          //console.log(this.selectedServices) ;
          let result : any[] = [];

          for(let i = 0; i <  this.selectedServices.length; i++) {
              let serv =  this.selectedServices[i].label;
             // console.log(serv) ;
              result.push(serv)
               this.Services = result;
           }


             this.ServicesResult.user_id =this.user.id ;
             this.ServicesResult.services =this.Services ;
             // console.log(this.ServicesResult) ;
              this.userapi.addservices(this.ServicesResult).subscribe(
                data=> {message = data ;
                  this.showSuccess(message.message) ;

                 // console.log(message)
                },
                error => {
                      this.showError(message.message) ;
                }

              )
         }



}
