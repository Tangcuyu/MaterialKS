/* 验证本地keystone用户名和密码 */
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs/';
import { delay, tap, map, catchError } from 'rxjs/operators';
import { UserCheckService } from './user-check.service';
import { User } from '../core-modules/model';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { environment } from './../../environments/environment';

(window as any).global = window;  // TypeScript的声明文件对window扩展


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //  store the URL so we can redirect after logging in.
  redirectUrl: string;
  isLoggedIn: boolean;

  constructor(private userCheck: UserCheckService, private router: Router) {}

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
