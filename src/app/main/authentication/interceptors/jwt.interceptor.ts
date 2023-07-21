import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this.storageService.getToken();
    const authReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`),
    });
    return next.handle(authReq).pipe(
      tap(console.log),
    //   catchError((error: HttpErrorResponse) => {
    //     if (error.status === 401) {
    //       // handle the 401 error here, for example, redirect to login page
    //       this.storageService.deleteToken();
    //       this.storageService.deleteRole();
    //       this.router.navigate(['']);
    //     }
    //     return throwError(() => error);
    //   })
    );
  }
}
