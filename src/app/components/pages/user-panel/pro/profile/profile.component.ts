import { formatDate } from '@angular/common';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { FilterService, MessageService, SelectItemGroup } from 'primeng/api';
import { Search } from 'src/app/models/service/search';
import { Password } from 'src/app/models/user/password';
import { State } from 'src/app/models/user/state';
import { User } from 'src/app/models/user/user';
import { UserAdress } from 'src/app/models/user/useradress';
import { ApiService } from 'src/app/shared/api/api.service';
import { CategoryService } from 'src/app/shared/api/category1.service';
import { UploadService } from 'src/app/shared/api/upload.service';
import { UserService } from 'src/app/shared/api/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
//import Swal from 'sweetalert2';


export class result {

  subs: any[];

}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {

            subcategories : result = new result ;
            filedata: any;
            data :any;
            Disabled: boolean;
            categories: Object;
            sub: any;
            filteredSub: any[]; states : any;
            searchsub : Search = new Search ;
            result : any ;
            selecteds: any;



          public c : any;
          public user: User  = new User ;
          public users: UserAdress  = new UserAdress ;


          public image : any;

          public password!: Password ;
          public currentuser : any = null;
          public passwordForm: FormGroup;
          public searchForm: FormGroup;
          public usertwoform : FormGroup;
          private notifier: NotifierService;
          selectedCountries: any[];
          selectedServices: any[];
          selectedCategories: any[];

          filteredCountries: any[];
          filteredServices: any[];
          subArray : any[] ;


            serach = new Search ;

          //selectedCountry: Country;
          selectedCountry: string;
          selcttedService : string;
          selcttedcategory : any;
          selcttedsubcategory : any;

          countries: any[];
          services : any;
          servicesArray : any[] ;



          formsearch : FormGroup ;

          selectedCity3: string;
          groupedCities: SelectItemGroup[];
          groupedServices: SelectItemGroup[];
          groupeddServices: any[];

 public line : any = [
  {title:"Affaires"}, {title:"Résidence"}, {title:"Cellulaire"}, {title:"Autre"}

 ];

 public langue = [
  {title:"Francais"},
  {title:"Anglais"}

];

   searchs: FormGroup;


 public userForm: FormGroup;
  constructor(public auth: AuthService ,
    public userapi : UserService ,
    public router: Router ,
    public fb: FormBuilder,
    public upload : UploadService,private http: HttpClient ,
    public category : CategoryService,
    notifierService: NotifierService,  private filterService: FilterService,
    private messageService: MessageService
     )
  {

    this.searchs = this.fb.group({

      subs: this.subcategories,

    });

    this.notifier = notifierService;

    this.auth.Profile().subscribe((data: any)=> {this.user = data ;   console.log(this.user.role)});

    this.auth.profileUser().subscribe(data=>  {this.users = data ; console.log(this.users = data ) ;

      if (this.user.logo)
      {this.image = `http://localhost:8000/storage/image/${this.user.logo}`}
      else {this.image = 'assets/img/Logo_e.jpg'}

    }) ;


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

        this.userapi.getAllStates().subscribe(
          response => {
            this.states = response ;

          }) ;

        this.countries = [

          {name: 'germany', code: 'DE'},
          {name: 'japan', code: 'JP'},
          {name: 'usa', code: 'US'}
      ];


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
  qs ;
  breadcrumb = [ {  title: 'My Profile',subTitle: 'User Panel'}]

  ngOnInit():void  {
    this.router.navigateByUrl('professionnel/profile');
    this.category.getAllCategories().subscribe(
      response => {
        this.categories = response ;



      },) ;

      this.category.getservBysub(["gestion"]).subscribe(
        data => {
            this.qs = data ;
            console.log(this.qs);
        }
      )



}

fileEvent(e){
  this.filedata = e.target.files[0];
 // this.filedata.name = "http://localhost:8000/storage/image/"+this.filedata.name ;
  console.log(this.filedata);
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
         console.log(this.data);
          if(!this.data)
         {this.showError(c.message) ;}
         else {
          this.showSuccess(c.message) ;          }

      },
      error => {
        console.log(error);

      });

  }

  updateprofileCV()
  {
   // const data : any = {name: this.user.username , email:this.user.email}
   //this.currentuser = this.user ;
   const formData =new FormData();
   formData.append("img",this.filedata,this.filedata.name);
   console.log(formData);
   //this.currentuser.logo=formData ;
    this.userapi.updatecv(this.user.id , formData) .subscribe(
      response => {
        let c :any ;
        // console.log(response);
         this.data= response ;
         console.log(this.data);
          if(!this.data)
         {this.showError(c.message) ;}
         else {
          this.showSuccess(c.message) ;          }

      },
      error => {
        console.log(error);

      });

  }




  updateprofile()
  {
   // const data : any = {name: this.user.username , email:this.user.email}
   let currentuser = this.users ;
  //  const formData =new FormData();
  //   formData.append("img",this.filedata,this.filedata.name);

      console.log(this.selectedServices) ;

    this.userapi.updateAdress(this.user.id , currentuser) .subscribe(
      response => {
        this.notifier.notify('success', 'User updated successfully');
        this.data=response;
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
        this.notifier.notify('success', 'password updated successfully');
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }




filteredGroups : any[] ;

filterGroupedServices(event) {
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
}







filterSubCategories(event) {

let error  ;
 this.searchsub.label = this.selcttedcategory.label ;
 //console.log( this.searchsub) ;

 this.category.getSubByCat( this.selcttedcategory.label).subscribe(
    response => {
      this.result= response ;
        // console.log( this.result) ;
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
                this.subArray = result;
                this.subcategories.subs= this.subArray ;
                console.log(this.subcategories) ;

                this.data = this.searchs.value ;
                this.data.subs = this.subcategories.subs ;
                console.log( this.subcategories.subs) ;

                let x ;
                let filtered : any[] = [];
                let query = event.query;
                let f ;
               
                this.category.getservBysub(result).subscribe(
                  response => {
                    f= response ;
                    
                      // this.services=response;
                       console.log(f);
                       for(let i = 0; i < f.length; i++) {
                        let serv = f[i];
                        console.log(serv) ;
                      
                        for(let j = 0; i < serv.length; i++) {
                                  filtered.push(serv[i]);
                        } 
                      }
                      console.log(filtered);
                                this.filteredServices = filtered;
                                  console.log(this.filteredServices);

                   },
                   error => {error = error.errors;}

                  ) ;

              //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
              // let filtered : any[] = [];
              // let query = event.query;
              // for(let i = 0; i < this.services.length; i++) {
              //   let serv = this.services[i];
              //   console.log(serv) ;
              //   // serv.label.toLowerCase().indexOf(query.toLowerCase()) == 0
              //   console.log(f);
              //   if (f) {
              //       filtered.push(serv);} }
              //       this.filteredServices = filtered;
              //            console.log(this.filteredServices);
                        
                      
                  }
                  // let arr:any[];
                      // for(let i=0;i<response;i++){
                      //   arr.push(response[i]);
                      // }
                      // this.filteredServices =arr ;
                      // console.log(this.filteredServices);


}
