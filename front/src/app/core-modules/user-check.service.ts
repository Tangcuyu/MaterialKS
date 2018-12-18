/* 检查本地keystone用户名和密码是否正确 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs/';


// const configUrl = 'http://localhost:3000/keystone/api/session/signin';
const configUrl = 'http://localhost:3000/api/usertest';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserCheckService {

  constructor(private http: HttpClient) { }

  checkUser(user: any): Observable<Response>  {
    return this.http.post<Response>(configUrl, user, httpOptions)
      .pipe(
        catchError(this.handelError)
      );
  }

  private handelError(err: HttpErrorResponse | any) {
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it here.
      console.error('An error occurred:', err.error.message);
      return throwError('client-side or network error occurred');
    } else {
      // The backend returned an unsucessful response code.
      // The response body may contain clues as to what went wrong.
      if (err.status === 401) {
        return throwError('The email and password you entered are not valid.');
      }
      if (err.status === 403) {
        return throwError('Server Forbidden: invaild csrf');
      }
      // console.error(`Backend returned code ${err.status}` + `body was: ${JSON.stringify(err.error)}`);
    }

    return throwError('Something bad happened; please try again later.');
  }

}
