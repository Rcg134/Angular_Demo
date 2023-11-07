import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthLocaStorageService {
  private isAuthenticated: boolean = false;
  private Token: string = '';

  constructor(private route: Router) {}

  SetToken(token: string) {
    this.Token = token;
  }

  GetToken() {
    return this.Token;
  }

  SetCredentials(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  GetCredentials(key: string) {
    return localStorage.getItem(key);
  }

  RemoveCredentials(key: string) {
    localStorage.removeItem(key);
  }

  SessionLogout() {
    this.RemoveCredentials('Name');
    this.RemoveCredentials('Token');
    this.RemoveCredentials('isAuthenticated');
    this.updateAuthenticationState(false);
    this.route.navigate(['Login']);
  }

  updateAuthenticationState(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  getAuthenticationState() {
    return this.isAuthenticated;
  }
}
