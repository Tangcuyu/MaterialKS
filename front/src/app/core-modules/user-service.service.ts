/* UserService 用来从Keystone读取User列表 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { User } from './model';
import { Observable } from 'rxjs/observable';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs/';

@Injectable(
)
export class UserServiceService {

  configUrl = '/api/usertest';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<User>(this.configUrl)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handelError)
    );
  }

  private handelError(error: HttpErrorResponse): Observable<HttpResponse<User>> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it here.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}` + `body was: ${error.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }

}
