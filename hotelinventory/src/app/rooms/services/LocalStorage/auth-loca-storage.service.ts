import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthLocaStorageService {
  constructor(private route: Router) {}

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
    this.RemoveCredentials('isLoggedIn');
    this.RemoveCredentials('Token');
    this.route.navigate(['Login']);
  }
}
