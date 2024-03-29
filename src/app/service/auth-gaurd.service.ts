import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(private router: Router,
    private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log("canActivate" +this.authService.isUserLoggedIn());
      if (this.authService.isUserLoggedIn())
        return true;
  
      this.router.navigate(['login']);
      return false;
  
    } 
}
