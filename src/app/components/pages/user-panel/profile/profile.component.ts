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
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  fileData: File = null;
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
}

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

  successAlert()
  {
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Password change successfully',
    showConfirmButton: false,
    timer: 1500
  }) ;
}

  breadcrumb = [ {  title: 'My Profile',subTitle: 'User Panel'}]

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
        this.successAlert() ;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }


  onUpload() {
   /* const formData = new FormData();
    formData.append('file', this.fileData);

    const isUploading = true;

    this.http.put("http://127.0.0.1:8000/api/auth/upload-image", formData , {  reportProgress: true,
    observe: 'events'  } ).subscribe(events => {
      if(events.type == HttpEventType.UploadProgress) {
          console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
      } else if(events.type === HttpEventType.Response) {
          console.log(events);

  });*/



}
}
