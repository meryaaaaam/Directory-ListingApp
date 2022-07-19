import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/shared/api/user.service';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  singleSelect : any ;
  StateSelect : any ;
  CompanysingleSelect : any ;
  data : any ;
  Cdata : any ;
  searchResult : any ;
  searchstate : any ;
  searchCompany : any ;
  state : any;

  config = {
    displayKey: "name",
    height:'200px',
    search: true,
    placeholder: "Que cherchez-vous",
     searchPlaceholder: 'Cherchez...',
};



configstate = {
displayKey: "name",
placeholder: "Addresse",
searchPlaceholder: 'Cherchez...',
height:'200px',
search: true
};


    constructor( public r : Router , public u : UserService ) { }

    ngOnInit(): void {

      this.u.getAllStates().subscribe(
        data => {this.state = data ; this.searchstate= this.state ;
        console.log(this.state) ; }
      )

      this.u.searchCompany().subscribe(data => {this.Cdata = data ;
        this.searchCompany = this.Cdata.Result ;
        console.log(this.searchCompany) ;})

      this.u.searchPro().subscribe(
        data => { this.data = data ;

          this.searchResult = this.data.Result ;
        console.log(this.searchResult) ;
        }
      )
    }

    search($event )
    {
     // console.log($event);
      console.log(this.singleSelect.id) ;

      let word = this.singleSelect.id ;
      this.r.navigate(['/listing/', word]);




    }




    searchComp($event )
    {
     // console.log($event);
      console.log(this.singleSelect.id) ;

      let word = this.singleSelect.id ;
      this.r.navigate(['/listing/', word]);




    }
    sectionTitle = [
        {
            title: 'Your Small Business Start With Vesax',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.'
        }
    ]
    singleFeaturesBox = [
        {
            icon: 'flaticon-commerce',
            title: 'Lunch Your Business',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkText: 'Get Start Now',
            link: 'contact'
        },
        {
            icon: 'flaticon-project',
            title: 'Manage Your Business',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkText: 'Get Start Now',
            link: 'contact'
        },
        {
            icon: 'flaticon-growth',
            title: 'Grow Your Business',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            linkText: 'Get Start Now',
            link: 'contact'
        }
    ]

}
