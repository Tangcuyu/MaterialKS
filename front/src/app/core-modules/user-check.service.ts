import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs/';


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

  checkUser(user: any): Observable<HttpResponse<any>>  {
    return this.http.post<any> (configUrl, user, httpOptions)
      .pipe(
        catchError(this.handelError)
      );
  }


  private handelError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it here.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsucessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}` + `body was: ${JSON.stringify(error.error)}`);
    }

    return throwError('Something bad happened; please try again later.');
  }

}
