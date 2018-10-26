import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/';
import { delay, tap, map } from 'rxjs/operators';
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
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }



}
