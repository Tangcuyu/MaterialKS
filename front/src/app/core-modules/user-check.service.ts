import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError, of } from 'rxjs/';
import { error } from 'util';


const configUrl = '/keystone/api/session/signin';
// const configUrl = '/api/usertest';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserCheckService {

  constructor(private http: HttpClient) { }

  checkUser(user: any): Observable<any>  {
    return this.http.post<any>(configUrl, user, httpOptions)
      .pipe(
        map(res => {
          if (!res.response) {
            throw new Error('Value expected!');
          }
          return res.response;
        }),
        catchError(this.handelError)
      );
  }


  private handelError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it here.
      console.error('An error occurred:', err.error.message);
      return throwError('client-side or network error occurred');
    } else {
      // The backend returned an unsucessful response code.
      // The response body may contain clues as to what went wrong.
      if (err.status === 401) {
        return throwError('email or password invaild.');
      }
      console.error(`Backend returned code ${err.status}` + `body was: ${JSON.stringify(err.error)}`);
    }

    return throwError('Something bad happened; please try again later.');
  }

}
