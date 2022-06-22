import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {
  isSignedIn!: boolean;
  public user: User  = new User ;
  logo: any;
  constructor(public auth: AuthService  ,private auths: AuthStateService,
    public router: Router,
    public token: TokenService )
  { this.auth.profileUser().subscribe((data: any)=>

    {this.user = data ;

      if(this.user.logo)
      {this.logo = `http://localhost:8000/storage/image/${this.user.logo}`}
      else
      {this.logo="assets/img/logo/default.png" ;}


    });

  }

  ngOnInit()  {
    this.auths.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });


}

signOut() {
  this.auths.setAuthState(false);
  this.token.removeToken();
  this.router.navigate(['/']);
  console.log('signOut');
}

}
