import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/models/category/category';
import { Search } from 'src/app/models/Search';
import { CategoryService } from 'src/app/shared/api/category1.service';
import { SearchService } from 'src/app/shared/api/search.service';
import { UserService } from 'src/app/shared/api/user.service';


import {orderBy} from 'lodash';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  x : any; categorie : any ; checkIACNC :boolean = false;
  category : Category = new Category ;
  codec = new HttpUrlEncodingCodec;
  label : any ;
  search : any ;
  states : any;
  selcttedcategory: any = [];
   p:any;
   t:any;
   type : any ;  provinces : any[] = [] ;
   globalData:any = [];
   checkedTypes:any = {pro:false,company:false};
   I="" ; state="" ; l ;
  result ;


  constructor( private route: ActivatedRoute, public categories: CategoryService ,public userapi : UserService , private s : SearchService  , public r : Router )
  {

    }

  ngOnInit(): void {
      this.checkIACNC=false;
      let word ; let prov : string = null ; let i="" ;
      // this.getResult(this.route.snapshot.paramMap.get('label')) ;
       this.getuser(this.route.snapshot.paramMap.get('id')) ;

       this.route.queryParams.subscribe(params => {
        word = params['label'];
          prov = params['state'];
          i = params['IACNC'];
 }) ;

      if (prov && i)
      { this.getRes(i,prov);}
      else if(prov)
      {this.getRes('',prov);}
      else if(i)
      {this.getRes(i,'');}
       else
       {
        this.getRes('','');
       }
        console.log(word , prov , i) ;
        //this.getRes('','');

      this.categories.getAllCategories().subscribe(
        data=>{this.categorie = data
          //console.log(this.options)
        },
        error=> error.errors
      );
      this.userapi.getAllStates().subscribe(
        response => {
          this.states = response ;

        }) ;

  }

  search2($event)
    {
      let data ;

     // console.log($event);
     this.s.result(this.selcttedcategory.label).subscribe(res => {
         data = res ;
         if(data)
       { this.search = data.Result;}
       else {this.search = 0 ;}

        console.log(this.selcttedcategory.label);
        console.log(this.search) ;
        let word = this.selcttedcategory.label ;

        this.r.navigate(['/listing/', word]);
    //  window.location.reload();

     })


     // console.log(word);


    }

    TriProvince(){
        let data;
        // let url='%3Ftri%3D';
        //console.log(this.codec.decodeKey(url));
        this.r.navigate(['/listing/'+this.selcttedcategory.label], { queryParams: {tri: this.singleSelect.name}});
        //   console.log(this.selcttedcategory.label) ;
       // console.log(this.singleSelect.name);
        this.route.queryParams.subscribe(params => {
            // this.p = params['provine'];
               this.t = params['tri'];
         }) ;
         let label = this.selcttedcategory.label ;
         let tri = this.t ;
        this.s.searchTriProvince(label,tri).subscribe(
          res => {
           data = res;
           console.log(data);

           console.log(this.t),
         //  console.log(this.singleSelect.name)
           this.search = data.Result;
           console.log(  this.search);
       }) ;
        let test ;
       test = orderBy(this.search, ['Name'],['asc']);
       console.log(test) ;

       /* this.messageService.getMessage()
        .subscribe(message => {
         this.sentMessages = message.sort((a,b)=>{
               return a.broadcastOn==b.broadcastOn?0
                     :a.broadcastOn>b.broadcastOn?1:-1
          }));
         });*/



        //this.r.navigate(['/listing/', word,this.t]);

        //console.log(this.t);

            let word = this.selcttedcategory.label ;


        // this.s.searchTriProvince(this.selcttedcategory.label,this.t).subscribe(res =>

        //     console.log(res)) ;

    }


  getResult(word)
  {
    let t ;

    this.route.queryParams.subscribe(params => {
      // this.p = params['provine'];
          t = params['IACNC'];
   }) ;

   if (t)
   {
    this.s.searchwithIACNC(word,t).subscribe(
      response => {
        this.x = response ;
        console.log(word);

        if(this.x)
        {  this.search = this.x.Result}
        else {this.search = 0 ;}



        console.log(this.search);
       // console.log(this.countries);


      },
      err => console.log(word)
    )
   }else
    {this.s.result(word).subscribe(
      response => {
        this.x = response ;
        console.log(word);

        if(this.x)
        {  this.search = this.x.Result;
            this.globalData=this.search;
        }
        else {this.search = 0 ;}



        console.log(this.search);
       // console.log(this.countries);


      },
      err => console.log(word)
    )}
  }




  getuser(id)
  {
    this.categories.getUserbyCat(id).subscribe(
      data=> {this.x = data ;
        // console.log(this.x);
        },
      error=>error.errors,
    )
  }

  pageTitleContent = [
      {
          title: 'Trouver une Entreprise ou un(e) professionnel(le)'
      }
  ]

  // Category Select
  singleSelect: any = [];
  multiSelect: any = [];
  stringArray: any = [];
  objectsArray: any = [];
  resetOption: any;
  config = {
      displayKey: "name",
      search: true
  };


  searchChange($event) {
      console.log($event);
  }
  reset() {
      this.resetOption = [];
  }

  // Ordering Select
  options2 = [
      {
          name: "Croissant",
      },
      {
          name: "Défaut",
      },
      {
          name: "Decroissant",
      },


  ];

  verticalListings: number =  1;


  IACNC(event)
  { let word ; let prov='';
    this.route.queryParams.subscribe(params => {
          word = params['label'];
          prov = params['state'];
   }) ;
    let checked = event.target.checked ;
    console.log(checked) ;
    if (checked)
   {
    if(prov)
    {this.r.navigate(['/listing'],{ queryParams: {label: word , state: prov ,IACNC: true }});
    console.log(prov)
    this.getRes(true,prov);
  }
    else {this.r.navigate(['/listing'],{ queryParams: {label: word , IACNC: true }});
    this.getRes(true,'');}
   console.log(this.l)
   this.checkIACNC = true  ;

  }
   else
   {
    let res ;
    //this.r.navigate(['/listing/', word], {queryParams: {IACNC: false}});

  if(prov)
    {this.r.navigate(['/listing'],{ queryParams: {label: word , state : prov,IACNC: false }});
    this.getRes(false,prov);

  }
    else {this.r.navigate(['/listing'],{ queryParams: {label: word , IACNC: false }});
    this.getRes(false,'');}
   this.checkIACNC = false   ;


  }
  }




  Type(event)
  {

    let type = event.target.value ;
    if(type == 'Pro'){
        this.checkedTypes.pro = !this.checkedTypes.pro;
     }
    if(type == 'Company'){
        this.checkedTypes.company = !this.checkedTypes.company;
     }

    if (this.checkedTypes.pro == true && this.checkedTypes.company ==true || this.checkedTypes.pro ==false && this.checkedTypes.company == false){
        this.result=this.globalData;
    }else if(this.checkedTypes.pro == true && this.checkedTypes.company == false){
        this.result = this.globalData.filter(element=>element.role == type);
    }else if(this.checkedTypes.pro == false && this.checkedTypes.company == true){
        this.result = this.globalData.filter(element=>element.role == type);
    }

  }


  province(event)
  {
    let word ; let i ;let res ;
   this.route.queryParams.subscribe(params => {
    word = params['label'];
    i = params['IACNC'];
    });
    let j = 0 ; let e = event.target.value ;
    let state :any[] = [] ;
    //console.log(e) ;
    let unique ;

    if(event.target.checked)
    {  this.provinces.push(e);}
    else if(event.target.checked==false){
      const index: number = this.provinces.indexOf(e);
      if (index !== -1) {
            this.provinces.splice(index, 1); }
    }

    unique = this.provinces.filter((item, i, ar) => ar.indexOf(item) === i);
    //console.log(unique) ;
    this.provinces = unique;
    unique = this.provinces.map(x=>x).join(",");
    console.log(unique) ;



this.r.navigate(['/listing'],{ queryParams: {label: word, state:unique,IACNC: i }});

          if(i==true)
          {

            this.s.searchusers(word,unique,true).subscribe(
              response => {
                res = response ;
                this.result = res.Result ;
                console.log(this.result);
                this.globalData=this.result;

              }) ;
          }
          else if(i==false)
          {


            this.s.searchusers(word,unique,false).subscribe(
              response => {
                res = response ;
                this.result = res.Result ;
                console.log(this.result);
                this.globalData=this.result;

              }) ;
          }
            else
            {
              this.s.searchusers(word,unique,'').subscribe(
                response => {
                  res = response ;
                  this.result = res.Result ;
                  console.log(this.result);
                  this.globalData=this.result;

                }) ;
            }




}
getRes(i,p)
{
  let l =""; let provv ;
  this.route.queryParams.subscribe(params => {
    // this.p = params['provine'];

        l = params['label'];
         provv = params['state'];
 }) ;
 console.log(provv) ;
let res ;
if(p)
{
  this.s.searchusers(l,p,i).subscribe(
    response => {
      res = response ;
      this.result = res.Result ;
      console.log(this.result);
      this.globalData=this.result;

    }) ;
}
else {
  this.s.searchusers(l,'',i).subscribe(
    response => {
      res = response ;
      this.result = res.Result ;
      console.log(this.result);
      this.globalData=this.result;

    }) ;
}


}
}

