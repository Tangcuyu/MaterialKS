import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs/';
import { delay, tap, map, catchError } from 'rxjs/operators';
import { UserCheckService } from './user-check.service';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../core-modules/model';

@Injectable()
export class AuthService {

  isLoggedIn = false;

  //  store the URL so we can redirect after logging in.
  redirectUrl: string;

  constructor(private userCheck: UserCheckService) { }

  login(formAuth: User): Observable<any> {
    return this.userCheck.checkUser(formAuth).pipe(
      tap(val => this.isLoggedIn = true),
      catchError(this.handelError)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  private handelError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it here.
      console.error('An error occurred:', error.error.message);
      return throwError('client-side or network error occurred');
    } else {
      // The backend returned an unsucessful response code.
      // The response body may contain clues as to what went wrong.
      if (error.status === 401) {
        return throwError('email or password invaild.');
      }
      console.error(`Backend returned code ${error.status}` + `body was: ${JSON.stringify(error.error)}`);
    }

    return throwError('Something bad happened; please try again later.');
  }



}
