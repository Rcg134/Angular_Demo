import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  isLoggedIn = localStorage.getItem('isLoggedIn');
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLoggedIn == 'true') {
      return true;
    } else {
      // Redirect to the login page if the user is not logged in
      this.router.navigate(['Login']);
      return false;
    }
  }
}
