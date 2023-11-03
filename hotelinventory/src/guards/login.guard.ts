import { Injectable, OnInit } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthLocaStorageService } from 'src/app/rooms/services/LocalStorage/auth-loca-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate, OnInit {
  isAuthenticated = false;

  constructor(
    private router: Router,
    private authservice: AuthLocaStorageService
  ) {}
  ngOnInit(): void {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authservice.getAuthenticationState() == true) {
      return true;
    } else {
      // Redirect to the login page if the user is not logged in
      this.router.navigate(['Login']);
      return false;
    }
  }
}
