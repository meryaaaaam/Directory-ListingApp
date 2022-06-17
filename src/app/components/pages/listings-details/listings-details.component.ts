import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UserService } from 'src/app/shared/api/user.service';

@Component({
    selector: 'app-listings-details',
    templateUrl: './listings-details.component.html',
    styleUrls: ['./listings-details.component.scss']
})
export class ListingsDetailsComponent implements OnInit {
    id : any ;
    result : any  ;
    constructor(private route: ActivatedRoute, public user : UserService) { }

    ngOnInit(): void {
      this.id =  this.get(this.route.snapshot.paramMap.get('id')) ;
    }


    get(id)
    {

      let x ;
      this.user.get(id).subscribe(

        (data)=>{ x=data ;
                  this.result= x;
                  console.log(x) ;
                }
      )
    }


    singleListingsBox = [
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings7.jpg'
                }
            ],
            categoryLink: 'single-listings',
            category: 'Restaurant',
            bookmarkLink: 'single-listings',
            location: 'Francisco, USA',
            title: 'The Mad Made Grill',
            price: 'Start From: $121',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user1.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'James',
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
            mainImg: [
                {
                    img: 'assets/img/listings/listings4.jpg'
                },
                {
                    img: 'assets/img/listings/listings2.jpg'
                }
            ],
            categoryLink: 'single-listings',
            category: 'Hotel',
            bookmarkLink: 'single-listings',
            location: 'Los Angeles, USA',
            title: 'The Beverly Hills Hotel',
            price: 'Start From: $200',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user2.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'Sarah',
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
                    icon: 'bx bx-star'
                }
            ],
            ratingCount: '10'
        }
    ]

    galleryOptions: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 2,
			}
		}
    }
    singleImageBox = [
        {
            img: 'assets/img/gallery/gallery1.jpg'
        },
        {
            img: 'assets/img/gallery/gallery2.jpg'
        },
        {
            img: 'assets/img/gallery/gallery3.jpg'
        },
        {
            img: 'assets/img/gallery/gallery4.jpg'
        },
        {
            img: 'assets/img/gallery/gallery5.jpg'
        }
    ]

    customOptions: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplayHoverPause: true,
		autoplay: true,
		mouseDrag: false,
		items: 1,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ]
    }

}
