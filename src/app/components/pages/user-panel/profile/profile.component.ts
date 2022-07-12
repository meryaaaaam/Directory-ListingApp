import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from 'src/app/models/user/password';
import { User } from 'src/app/models/user/user';
import { ApiService } from 'src/app/shared/api/api.service';
import { UploadService } from 'src/app/shared/api/upload.service';
import { UserService } from 'src/app/shared/api/user.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  filedata: File = null;
//   fileProgress(fileInput: any) {
//     this.fileData = <File>fileInput.target.files[0];
// }
data:any;

 public user: User  = new User ;

 public image = 'assets/img/user1.jpg';

 public password!: Password ;
 public currentuser : any = null;
    passwordForm: FormGroup;
  //  userForm: FormGroup;
  constructor(public auth: AuthService ,
    public userapi : UserService ,
    public router: Router ,
    public fb: FormBuilder,
    public upload : UploadService,private http: HttpClient
     )
  { this.auth.Profile().subscribe((data: any)=>

    {this.user = data ;   console.log(this.user.role)});

    this.passwordForm = this.fb.group({
      password_current: [''],
      new_password: [''],
      new_confirm_password: [''],
    });

    this.auth.profileUser().subscribe(data=>  {

      if (this.user.logo)
      {this.image = `localhost:8000/storage/image/${this.user.logo}`}
      else {this.image = 'assets/img/Logo_e.jpg'}

    }) ;



  }

  ngOnInit():void  {
    this.router.navigateByUrl('profile');
    if(this.user.role == 'Pro')
    this.router.navigateByUrl('professionnel/profile');
    else if(this.user.role == "Company")
    this.router.navigateByUrl('entreprise/profile');
    else
    { this.router.navigateByUrl('profile');}
  }

  fileEvent(e){
    this.filedata = e.target.files[0];
   // this.filedata.name = "https://bottin.groupe3737.com/storage/image/"+this.filedata.name ;
    console.log(this.filedata);
  }


  updateprofile2()
  {
   // const data : any = {name: this.user.username , email:this.user.email}
   //this.currentuser = this.user ;
   const formData =new FormData();
   formData.append("img",this.filedata,this.filedata.name );
   console.log(formData);
   //this.currentuser.logo=formData ;
    this.userapi.updateAdress2(this.user.id , formData) .subscribe(
      response => {
        let c :any ;
        // console.log(response);
         this.data= response ;
         console.log(this.data);
        //   if(!this.data)
        //  {this.showError(c.message) ;}
        //  else {
        //   this.showSuccess(c.message) ;          }

      },
      error => {
        console.log(error);

      });

  }


 /* successAlert()
  {
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Password change successfully',
    showConfirmButton: false,
    timer: 1500
  }) ;
}*/

  breadcrumb = [ {  title: 'Mon Profile',subTitle: 'Panneau Utilisateur'}]

  updateprofile()
  {
    //const data : any = {name: this.user.name , email:this.user.email}
  let currentuser = this.user ;
   console.log(currentuser) ;
    this.userapi.update(this.user.id , currentuser) .subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);
      });
  }

  updatepassword()
  {
      this.auth.changepassword(this.passwordForm.value).
      subscribe( response => {
     //   this.successAlert() ;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }




}
