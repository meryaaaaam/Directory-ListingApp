import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.resetOption = [this.options[0]];
    }

    mainBannerContent = [
        {
            title: 'Bienvenu dans le bottin 3737',
            paragraph: 'Trouvez une entreprise ou un(e) professionel(le)',
            popularSearchList: [
                {
                    title: 'Restaurants',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Automobile',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Divertissements',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Soins',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Personnels',
                    link: 'grid-listings-left-sidebar'
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
