import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs/';
import { delay, tap, map, catchError } from 'rxjs/operators';
import { UserCheckService } from './user-check.service';
import { User } from '../core-modules/model';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  isLoggedIn = false;

  //  store the URL so we can redirect after logging in.
  redirectUrl: string;

  constructor(private userCheck: UserCheckService, private router: Router) { }

  login(formAuth: User): Observable<any> {
    return this.userCheck.checkUser(formAuth).pipe(
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/pages/login']);
  }
}
