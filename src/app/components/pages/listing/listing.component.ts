import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      this.resetOption = [this.options[0]];
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
  options = [
      // Type here your category name
      {
          name: "Marketing",
      },
      {
          name: "Finance",
      },
      {
          name: "Banque et Assurance",
      },
      {
          name: "Technologies",
      },
      {
          name: "Comptabilité",
      },
      {
          name: "Commerce",
      }
  ];
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

