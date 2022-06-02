import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/shared/auth/token.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService  implements CanActivate {
  isLoggedIn = false ;
  roles: any;
  constructor(
    private token: TokenService ,
    private router: Router) { }



    canActivate(
      route: ActivatedRouteSnapshot): boolean  {
        this.roles = this.token.getUser().role;
        const expectedRole = route.data.expectedRole;



        if ( (this.token.getToken2()) && (this.roles.includes(expectedRole)) )
        { return true ; }
        else if (  (this.token.getToken2())  &&  (!this.roles.includes(expectedRole) ) ) {
            this.router.navigate(['/']) ;
            return false ;
              }

}
}
