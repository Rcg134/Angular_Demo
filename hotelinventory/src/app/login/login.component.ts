import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../rooms/login';
import { Router } from '@angular/router';
import { LoginServiceService } from '../rooms/services/LoginService/login-service.service';
import { HttpInterceptor } from '@angular/common/http';
import { RequestHttpInterceptor } from '../request-http.interceptor';
import { AuthLocaStorageService } from '../rooms/services/LocalStorage/auth-loca-storage.service';

@Component({
  selector: 'ake-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private route: Router,
    private UserService: LoginServiceService,
    private atecInterceptor: RequestHttpInterceptor,
    private authlocalStorage: AuthLocaStorageService
  ) {
    if (!localStorage.getItem('Token')) {
      this.route.navigate(['Login']);
    } else {
      this.route.navigate(['Student']);
    }
  }

  isHiddenRegister: boolean = true;
  isHiddenLogin: boolean = false;

  UserCred: Login = {
    username: '',
    password: '',
  };

  Login(UserForm: NgForm) {
    this.UserService.UserLogin(this.UserCred).subscribe(
      (data) => {
        if (data.message) {
          this.atecInterceptor.authToken = data.token;
          this.authlocalStorage.SetCredentials('Token', data.token);
          this.authlocalStorage.SetCredentials('isLoggedIn', 'true');
          this.authlocalStorage.SetCredentials(
            'Name',
            `${data.userProfile.name} ${data.userProfile.middleName} ${data.userProfile.surname}`
          );
          this.route.navigate(['Student']);
          //refresh to get the token and remove the delay
          window.location.reload();
        }
      },
      (error) => {
        alert(error.error.error);
      }
    );
  }

  toggleHide() {
    this.isHiddenRegister = !this.isHiddenRegister;
    this.isHiddenLogin = !this.isHiddenLogin;
  }
}
