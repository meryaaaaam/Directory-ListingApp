import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterService } from 'primeng/api';
import { element } from 'protractor';
import { Search } from 'src/app/models/service/search';
import { Service } from 'src/app/models/service/service';
import { CategoryService } from 'src/app/shared/api/category.service';
import { SearchService } from 'src/app/shared/api/search.service';


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
  config = {
    displayKey: "name",
    search: true
};
  cities: City[];

  selectedCountries: any[];
  selectedServices: any[];

  filteredCountries: any[];
  filteredServices: any[];

   //serach = new Search ;

  //selectedCountry: Country;
  selectedCountry: string;
  selcttedService : string;

  countries: any[];
  services : any;
  search : any ;
  servicesArray : any[] ;

  selectedCity: City;

  formsearch : FormGroup ;
  Disabled: boolean;
  x: any;
  constructor(public cat : CategoryService , private filterService: FilterService ,  public fb: FormBuilder, public searchserv : SearchService) {


    this.cat.getAllServices().subscribe(
      response => {
        this.services = response ;
       // console.log(this.services);
       // console.log(this.countries);


      },error => {
        console.log(error);
      });


     /* this.searchserv.results(this.route.snapshot.paramMap.get('label')).subscribe(
        response => {
          this.search = response ;
          console.log(this.search);
        //  console.log(this.countries);


        },error => {
          console.log(error);
        });*/

  }

  ngOnInit() {

    this.searchserv.result('ass').subscribe(
      response => {
        this.x = response ;
        console.log(this.x);
       // console.log(this.countries);


      },
      err => console.log(err.errorMessage)
    )
    this.cat.getAllServices().subscribe(
      response => {
        this.services = response ;
        //console.log(this.services);
       // console.log(this.countries);


      },) ;








   /* for (let optgroup of this.services) {
      this.servicesArray.push({
        id: optgroup.id,
        label: optgroup.label
      }); }
      console.log(this.servicesArray);
*/
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

}
