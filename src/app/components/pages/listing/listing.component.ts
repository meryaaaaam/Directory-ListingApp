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
   globalData:any = [];
   checkedTypes:any = {pro:false,company:false};

  constructor( private route: ActivatedRoute, public categories: CategoryService ,public userapi : UserService , private s : SearchService  , public r : Router )
  {

    }

  ngOnInit(): void {
        this.getResult(this.route.snapshot.paramMap.get('label')) ;
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

//   search() {
//     this.dataService.searchProjectData(this.projects).subscribe(res => {
//       this.projects = res; //right now 'res' value display as *null*
//     })
// }
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

      //{
      //    name: "Price: low to high",
    //  },
     // {
          //name: "Price: high to low",
     // }
  ];

  // All Listings
  singleListingsItem = [
      {
          mainImg: 'assets/img/bottin.jpg',
          categoryLink: 'single-listings',
          bookmarkLink: 'single-listings',
          category: 'Entreprise',
          location: 'Montréal, Québec',
          title: 'Groupe 3737',
         // price: 'Start From: $121',
          detailsLink: 'single-listings',
          authorImg: 'assets/img/user3.jpg',
          authorName: 'James',
           //openORclose: 'Open Now',
          extraClass: 'status-open',
          rating: [
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              }
          ],
          ratingCount: '18'
      },

      {
        mainImg: 'assets/img/bottin.jpg',
        categoryLink: 'single-listings',
        bookmarkLink: 'single-listings',
        category: 'Entreprise',
        location: 'Montréal, Québec',
        title: 'Groupe 3737',
       // price: 'Start From: $121',
        detailsLink: 'single-listings',
        authorImg: 'assets/img/user3.jpg',
        authorName: 'James',
         //openORclose: 'Open Now',
        extraClass: 'status-open',
        rating: [
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            }
        ],
        ratingCount: '18'
    },

    {
      mainImg: 'assets/img/bottin.jpg',
      categoryLink: 'single-listings',
      bookmarkLink: 'single-listings',
      category: 'Entreprise',
      location: 'Montréal, Québec',
      title: 'Groupe 3737',
     // price: 'Start From: $121',
      detailsLink: 'single-listings',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',
       //openORclose: 'Open Now',
      extraClass: 'status-open',
      rating: [
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bxs-star'
          }
      ],
      ratingCount: '18'
  },


   /*   {
          mainImg: 'assets/img/listings/listings10.jpg',
          categoryLink: 'single-listings',
          bookmarkLink: 'single-listings',
          category: 'Hotel',
          location: 'Los Angeles, USA',
          title: 'The Beverly Hills Hotel',
          price: 'Start From: $200',
          detailsLink: 'single-listings',
          authorImg: 'assets/img/user2.jpg',
          authorName: 'Sarah',
          openORclose: 'Open Now',
          extraClass: 'status-open',
          rating: [
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              }
          ],
          ratingCount: '10'
      },
      {
          mainImg: 'assets/img/listings/listings11.jpg',
          categoryLink: 'single-listings',
          bookmarkLink: 'single-listings',
          category: 'Shopping',
          location: 'Seattle, USA',
          title: 'Blue Water Shopping City',
          price: 'Start From: $500',
          detailsLink: 'single-listings',
          authorImg: 'assets/img/user5.jpg',
          authorName: 'Lina',
          openORclose: 'Open Now',
          extraClass: 'status-open',
          rating: [
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              }
          ],
          ratingCount: '55'
      },
      {
          mainImg: 'assets/img/listings/listings12.jpg',
          categoryLink: 'single-listings',
          bookmarkLink: 'single-listings',
          category: 'Restaurant',
          location: 'New York, USA',
          title: 'Chipotle Mexican Grill',
          price: 'Start From: $150',
          detailsLink: 'single-listings',
          authorImg: 'assets/img/user1.jpg',
          authorName: 'Taylor',
          openORclose: 'Close Now',
          extraClass: 'status-close',
          rating: [
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              }
          ],
          ratingCount: '45'
      },
      {
          mainImg: 'assets/img/listings/listings17.jpg',
          categoryLink: 'single-listings',
          bookmarkLink: 'single-listings',
          category: 'Restaurant',
          location: 'New York, USA',
          title: 'Thai Me Up Restaurant',
          price: 'Start From: $150',
          detailsLink: 'single-listings',
          authorImg: 'assets/img/user2.jpg',
          authorName: 'Sarah',
          openORclose: 'Close Now',
          extraClass: 'status-close',
          rating: [
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              }
          ],
          ratingCount: '45'
      },
      {
          mainImg: 'assets/img/listings/listings16.jpg',
          categoryLink: 'single-listings',
          bookmarkLink: 'single-listings',
          category: 'Shopping',
          location: 'Seattle, USA',
          title: 'Skyview Shopping Complex',
          price: 'Start From: $500',
          detailsLink: 'single-listings',
          authorImg: 'assets/img/user5.jpg',
          authorName: 'Lina',
          openORclose: 'Open Now',
          extraClass: 'status-open',
          rating: [
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              },
              {
                  icon: 'bx bxs-star'
              }
          ],
          ratingCount: '55'
      }*/
  ]

  verticalListings: number =  1;


  IACNC(event)
  {
    let checked = event.target.checked ;
    console.log(checked) ;
   let word = this.route.snapshot.paramMap.get('label') ;
   if (checked)
   { this.r.navigate(['/listing/', word], {queryParams: {IACNC: true}});

   this.s.searchwithIACNC(word,true).subscribe(
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
    
    let type = event.target.value ;
    if(type == 'Pro'){
        this.checkedTypes.pro = !this.checkedTypes.pro;  
        console.log(this.checkedTypes.pro);
    }
    if(type == 'Company'){
        this.checkedTypes.company = !this.checkedTypes.company;  
        console.log(this.checkedTypes.company);
    }
    
    if (this.checkedTypes.pro == true && this.checkedTypes.company ==true || this.checkedTypes.pro ==false && this.checkedTypes.company == false){
        this.search=this.globalData;
    }else if(this.checkedTypes.pro == true && this.checkedTypes.company == false){
        this.search = this.globalData.filter(element=>element.role == type);
    }else if(this.checkedTypes.pro == false && this.checkedTypes.company == true){
        this.search = this.globalData.filter(element=>element.role == type);
    }

    // if(!type){
    //     this.search=this.globalData;
    //     console.log(type);
    // }
    // else{
    //     this.search = this.globalData.filter(element=>element.role == type);
    // console.log(this.search) ;
    //console.log(type);
    //}
    
    
//     let word = this.route.snapshot.paramMap.get('label') ;
    
//     if (type=='Pro')
//     { this.r.navigate(['/listing/', word], {queryParams: {Type: 'Pro'}});}
//     else {
//       this.r.navigate(['/listing/', word], {queryParams: {Type: 'Company'}});
//     }
//   console.log(type) ;


  }
}

