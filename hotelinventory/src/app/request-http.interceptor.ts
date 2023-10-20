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

@Injectable()
export class RequestHttpInterceptor implements HttpInterceptor {
  authToken =
    'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXdhdyIsImV4cCI6MTY5Nzg5MTAxNiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzExNS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTE1L2FwaS9TdHVkZW50LyJ9.t2yFtJlF0jZ4GlZOinSUKsD9zv4WyD_r4fo3M7rjNgM';
  constructor() {}

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
            alert('Unauthorized');
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
