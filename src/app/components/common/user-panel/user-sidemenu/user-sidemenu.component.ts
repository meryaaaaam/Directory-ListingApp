import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';

@Component({
  selector: 'app-user-sidemenu',
  templateUrl: './user-sidemenu.component.html',
  styleUrls: ['./user-sidemenu.component.scss']
})
export class UserSidemenuComponent implements OnInit {

  isSignedIn!: boolean;
  user!:User ;
  constructor(public auth: AuthService  ,private auths: AuthStateService,
    public router: Router,
    public token: TokenService )
  { this.auth.profileUser().subscribe((data: any)=>

    {this.user = data ;   });

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
