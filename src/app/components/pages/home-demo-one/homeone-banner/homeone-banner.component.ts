import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/api/category1.service';
import { SearchService } from 'src/app/shared/api/search.service';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {
    categories: any;
    cat : any ;
    label : any ;
    searchResult : any ;
    constructor(public category : CategoryService , public s : SearchService , public r : Router ) { }

    ngOnInit() {

      this.s.SearchByLabel().subscribe(
        data =>{this.searchResult = data ; console.log(this.searchResult); }
      );

        this.resetOption =  [];



        this.category.getAllCategories().subscribe(
          data => this.categories = data
        )

    }

    mainBannerContent = [
        {
            title: 'Bienvenue dans le bottin 3737',
            paragraph: 'Trouvez une entreprise ou un(e) professionel(le)',
            popularSearchList: [ ]
        }
    ]

    // Category Select
    singleSelect: any = [];
    multiSelect: any = [];
    stringArray: any = [];
    objectsArray: any = [];
    resetOption: any;
    config = {
        displayKey: "label",
        search: true
    };

    searchChange($event) {
        console.log($event);

    }
    reset() {
        this.resetOption = [];
    }


    search()
    {
     // console.log($event);
      console.log(this.singleSelect.label) ;

      let word = this.singleSelect.label ;
      this.r.navigate(['/listing/', word]);




    }
    

}
