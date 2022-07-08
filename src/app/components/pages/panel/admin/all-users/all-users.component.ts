import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user/user';
import { UploadService } from 'src/app/shared/api/upload.service';
import { UserService } from 'src/app/shared/api/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
//import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/shared/api/category1.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
  providers: [MessageService]

})
export class AllUsersComponent implements OnInit {
   users: any;

  note : string ;
  name: string;
  logo: any;
  user: User = new User;
  data: any;
  closeResult = '';
  userinfo : any  ;
  services : any;
  sub: any;
  states : any;
  categories: Object;

  url : any  ;
  constructor(public auth: AuthService ,
    public userapi : UserService ,
    public router: Router ,
    public fb: FormBuilder,
    public category : CategoryService,
    public upload : UploadService,private http: HttpClient,private modalService: NgbModal ,
    private messageService: MessageService
     )
     {  this.userapi.getAllListUser().subscribe( data=>
      {this.users = data ; console.log(this.users);


            if (this.users.role == 'Pro') { this.name = this.users.firstname + ' ' + this.users.lastname; }
            else if (this.users.role == 'Company') { this.name = this.users.companyname; }
            else { this.name = this.users.username; }

            }
    );

    this.category.getAllServices() .subscribe(
      response => {  this.services = response ;  },
      error => { console.log(error);  });

      this.category.getAllSubCategory() .subscribe(
        response => {  this.sub = response ;  },
        error => { console.log(error);  });

        this.userapi.getAllStates().subscribe(
          response => {
            this.states = response ;

          }) ;

  }

  ngOnInit(): void {
    this.logo = "assets/img/logo/default.png";
    this.url="http://localhost:8000/storage/image/" ;
    this.category.getAllCategories().subscribe(
      response => {
        this.categories = response ;



      },) ;

  }

  breadcrumb = [
    {
      title: 'Liste des utilisateurs',
      subTitle: 'Dashboard'
    }
  ]


  Content =
    {
      customerImg: 'assets/img/user1.jpg',
      customerName: 'James Anderson',
      customerNumber: '+214 4455 6521',
      customerEmail: 'hello@james.com',
      title: 'Farmis Hotel & Restaurant',
      bookingsStatus: 'Pending',
      pendingApprovedCanceled: 'pending',

    }

    showSuccess(detail) {
      this.messageService.add({severity:'success', summary: 'Success', detail: detail});
  }

  showInfo(detail) {
    this.messageService.add({severity:'info', summary: 'Info', detail: detail});
}

showWarn() {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Message Content'});
}

showError(detail) {
    this.messageService.add({severity:'error', summary: 'Error', detail: detail});
}

  Approved(id) {


     this.userapi.get(id).subscribe(
      response => {
        this.data = response;
            this.user.isActive = true ;
            this.user.status = 'approuved' ;

            this.user.isActive = true;

        this.userapi.isActive(id, this.user).subscribe(
          response => {
            let data = response; console.log(data);
            this.showSuccess('utilisateur approvée avec succes') ;
                      }


        )


      },
      error => {
        console.log(error);
        this.showError('Somthing going wrong') ;
      });
  }


  reject(id) {

     this.userapi.get(id).subscribe(
      response => {
        this.data = response;
               this.user.status = 'rejected' ; this.user.isActive = false ;

        this.user.isActive = false;

        this.userapi.isActive(id, this.user).subscribe(
          response => { let data = response; console.log(data);

            this.showSuccess('email de rejet a été envoyer avec succes') ;
          }

        )


      },
      error => {
        console.log(error);
        this.showError('Somthing going wrong') ;
      }
     );

  }
  SendMail(id) { //Email Send Button Click Function

    this.http.get(`http://localhost:8000/users/send-mail/${id}`).subscribe(
      data => { console.log(data); this.showSuccess('email de rejet a été envoyer avec succes') ;},
      error => console.error(error));
  }


  open(content , id) {
    let message ;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log(id , this.note) ;

      //  console.log(this.users); // Liste des utilisatuer

         /*this.userinfo =  this.userapi.get(id).subscribe(
          data=>{  this.userinfo = data ; console.log(this.userinfo) ;}  ) ; // Get user By id => utilisatuer selectionné (qui va lui envoyé une note )
          this.note= this.userinfo.note ;*/
         this.user.note = this.note ;
         console.log(this.user) ;
        this.userapi.note(id , this.user).subscribe(
          data =>{ message = data; console.log(message) }  );
        //console.log(this.user.bio);*/



      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;


    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }





}

