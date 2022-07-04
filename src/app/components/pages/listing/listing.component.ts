import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/models/category/category';
import { Search } from 'src/app/models/Search';
import { CategoryService } from 'src/app/shared/api/category1.service';
import { SearchService } from 'src/app/shared/api/search.service';
import { UserService } from 'src/app/shared/api/user.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  x : any; categorie : any ;
  category : Category = new Category ;

  label : any ;
  search : any ;
  states : any;
  selcttedcategory: any = [];

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

        this.r.navigate(['/listing/', decodeURIComponent(word)]);
    //  window.location.reload();

     })



     // console.log(word);






    }


  getResult(word)
  {

    this.s.result(word).subscribe(
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
          name: "Recommandée",
      },
      {
          name: "Défaut",
      },
      {
          name: "Popularité",
      },
      {
          name: "Dernière",
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


}

