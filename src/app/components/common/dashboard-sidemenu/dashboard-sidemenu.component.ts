import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';

@Component({
  selector: 'app-dashboard-sidemenu',
  templateUrl: './dashboard-sidemenu.component.html',
  styleUrls: ['./dashboard-sidemenu.component.scss']
})
export class DashboardSidemenuComponent implements OnInit {


  isSignedIn!: boolean;
  user!:User ;
  role : string ;
  constructor(public auth: AuthService  ,private auths: AuthStateService,
    public router: Router,
    public token: TokenService )
  { this.auth.roles().subscribe((data: any)=>

    {this.role = data ;  console.log(this.role) });

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
