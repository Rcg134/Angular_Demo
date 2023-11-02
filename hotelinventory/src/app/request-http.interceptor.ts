import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthLocaStorageService } from './rooms/services/LocalStorage/auth-loca-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class RequestHttpInterceptor implements HttpInterceptor {
  authToken: string = '';
  constructor(
    private authlocalStorage: AuthLocaStorageService,
    private route: Router
  ) {
    this.authToken = localStorage.getItem('Token') ?? '';
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // go to app module to regsiter this

    if (
      request.method === 'POST' ||
      request.method === 'GET' ||
      request.method === 'PUT' ||
      request.method === 'DELETE'
    ) {
      const newRequesst = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.authToken}`,
        }),
      });

      return next.handle(newRequesst).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // this.authlocalStorage.SessionLogout();
          }
          return throwError(error);
        })
      );
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Unauthorized');
        }
        return throwError(error);
      })
    );
  }
}
