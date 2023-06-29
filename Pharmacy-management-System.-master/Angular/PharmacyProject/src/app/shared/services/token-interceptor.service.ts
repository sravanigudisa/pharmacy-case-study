import { ToastrService } from 'ngx-toastr';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    ////
    let tokenn = localStorage.getItem('token');
    let jwttoken = req.clone({
      setHeaders: {
        Authorization: 'bearer ' + tokenn,
      },
    });
    return next.handle(jwttoken).pipe(
      catchError((errordata) => {
        if (errordata.status != 200) {
          this.toastr.error(errordata.status + ' Error', errordata.error.title);

          return throwError(errordata);
        }
        return throwError(errordata);
      })
    );
  }
}
