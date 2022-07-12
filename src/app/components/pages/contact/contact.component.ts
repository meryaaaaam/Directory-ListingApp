import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    contactInfoBox = [
        {
            icon: 'bx bx-map',
            title: 'Adresse',
            info: [
                {
                    text: '3737 Crémazie Est, Montréal, Québec, H1Z 2K4'
                }
            ]
        },
        {

            icon: 'bx bx-envelope',
            title: 'Contactez-nous',
            info: [

                {
                    text: 'bottin@groupe3737.com'
                }
            ]
        },
        {
            icon: 'bx bx-phone-call',
            title: 'Téléphone',
            info: [
              {
                text: '1 (877) 476-3737'
            },

            ]
        }
    ]

    sectionTitle = [
        {
            title: 'Ready to Get Started?',
            paragraph: 'Your email address will not be published. Required fields are marked *'
        }
    ]

    contactImage = [
        {
            img: 'assets/img/contact.png'
        }
    ]

    submit(form){
        var name = form.name;
        console.log(name);

        var email = form.email;
        console.log(email);

        var number = form.number;
        console.log(number);

        var message = form.message;
        console.log(message);
    }

}
