import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseService } from '../response';
import { Login } from '../../login';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}
  isLoggedIn: boolean = false;

  UserLogin(UserLog: Login) {
    return this.http.post<ResponseService>('/api/Student/Login', UserLog);
  }
}
