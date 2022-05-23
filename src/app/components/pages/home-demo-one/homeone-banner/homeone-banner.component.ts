import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/api/category.service';
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

    constructor(public category : CategoryService , public s : SearchService  ) { }

    ngOnInit(): void {


        this.resetOption = [this.options[0]];

        this.category.getAllCategories().subscribe(
          data => this.categories = data
        )

    }

    mainBannerContent = [
        {
            title: 'Bienvenu dans le bottin 3737',
            paragraph: 'Trouvez une entreprise ou un(e) professionel(le)',
            popularSearchList: [
                {
                    title: 'Marketing',
                    link: 'single-listings'
                },
                {
                    title: 'Finance',
                    link: 'single-listings'
                },
                {
                    title: 'Banque et Assurance',
                    link: 'single-listings'
                },
                {
                    title: 'Comptabilité',
                    link: 'single-listings'
                },
                {
                    title: 'Commerce',
                    link: 'single-listings'
                }
            ]
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
            name: "Restaurants",
        },
        {
            name: "Automobile",
        },
        {
            name: "Divertissements",
        },
        {
            name: "Soins",
        },
        {
            name: "Personnels",
        }
    ];
    searchChange($event) {
        console.log($event);
    }
    reset() {
        this.resetOption = [];
    }

}
