import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/models/category/category';
import { Search } from 'src/app/models/Search';
import { CategoryService } from 'src/app/shared/api/category.service';
import { SearchService } from 'src/app/shared/api/search.service';
import { UserService } from 'src/app/shared/api/user.service';

import {orderBy} from 'lodash';
@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.scss']
})
export class AllListingComponent implements OnInit {


  x : any; categorie : any ;
  category : Category = new Category ;
  codec = new HttpUrlEncodingCodec;
  label : any ;
  search : any ;
  states : any;
  selcttedcategory: any = [];
   p:any;
   t:any;
   type : any ;

   img ="" ;

  constructor( private route: ActivatedRoute, public categories: CategoryService ,public userapi : UserService , private s : SearchService  , public r : Router )
  {

    }

  ngOnInit(): void {
        this.getResult() ;
       this.getuser(this.route.snapshot.paramMap.get('id')) ;


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




    }


  getResult()
  {
    let t ;

    this.route.queryParams.subscribe(params => {
      // this.p = params['provine'];
          t = params['IACNC'];
   }) ;

   if (t)
   {
    this.s.searcAllhwithIACNC(t).subscribe(
      response => {
        this.x = response ;


        if(this.x)
        {  this.search = this.x.Result}
        else {this.search = 0 ;}   console.log(this.search);
       // console.log(this.countries);
      },   err => console.log()
    )
   }else
    {this.s.searchAll().subscribe(
      response => {
        this.x = response ;
        console.log(this.x);

        if(this.x)
        {  this.search = this.x.Result}
        else {this.search = 0 ;}



        console.log(this.search);
       // console.log(this.countries);


      },
      err => console.log( )
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

      //{
      //    name: "Price: low to high",
    //  },
     // {
          //name: "Price: high to low",
     // }
  ];


  verticalListings: number =  1;


  IACNC(event)
  {
    let checked = event.target.checked ;
    console.log(checked) ;
   let word = this.route.snapshot.paramMap.get('label') ;
   if (checked)
   { this.r.navigate(['/listings/all'], {queryParams: {IACNC: true}});

   this.s.searcAllhwithIACNC(true).subscribe(
    response => {
      this.x = response ;
      console.log(word);

      if(this.x)
      {  this.search = this.x.Result}
      else {this.search = 0 ;}



      console.log(this.search);
     // console.log(this.countries);


    });


  }
   else
   { this.r.navigate(['/listing/', word], {queryParams: {IACNC: false}});

   this.s.searchwithIACNC(word,false).subscribe(
    response => {
      this.x = response ;
      console.log(word);

      if(this.x)
      {  this.search = this.x.Result}
      else {this.search = 0 ;}



      console.log(this.search);
     // console.log(this.countries);


    });


  }
  }

  Type(event)
  {
    let word = this.route.snapshot.paramMap.get('label') ;
    let type = event.target.value ;
    if (type=='Pro')
    { this.r.navigate(['/listing/', word], {queryParams: {Type: 'Pro'}});}
    else {
      this.r.navigate(['/listing/', word], {queryParams: {Type: 'Company'}});
    }
  console.log(type) ;


  }
}

