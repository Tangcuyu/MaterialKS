import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../../../core-modules/user-service.service';
import { UserCheckService } from '../../../core-modules/user-check.service';
import { AuthService } from '../../../core-modules/auth.service';
import { Router } from '@angular/router';
import { User, IUserConfig} from '../../../core-modules/model';

// Import OAuthservice from angular-oauth2-oidc
import { OAuthService } from 'angular-oauth2-oidc';

// Define animations
import { slideInAnimation } from '../../../animations';
import { NotifyService } from '../../../core-modules/notify.service';
import { INotifyConifg } from '../../../core-modules/model';

import {
  AnimationEvent
} from '@angular/animations';
import { Subscription } from 'rxjs/';


declare var $: any;
const notifyconfig: INotifyConifg = {
  from: 'top',
  align: 'center',
  title: '',
  message: '',
  color: 3,
  timer: 2000,
  delay: 1000
};

@Component({
  selector: 'itsi-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss'],
  animations: [slideInAnimation]
})
export class UserAuthComponent implements OnInit, OnDestroy {
  public sub: Subscription;
  public guest: User; // User who will be certified
  public userConfig: IUserConfig; // Certified user infomation
  public headers: string[];
  public isShow: Boolean; // Auth form animation switch
  public message: string; // log infomation
  public userName: string;
  public email: string;
  public password: string;
  public submitted: Boolean = false;
  public err: string;


  constructor(private oauthService: OAuthService,
    private authService: AuthService, private router: Router, private notify: NotifyService) {
    console.log(this.authService);
    }

  login(formAuth: any) {
    this.guest = formAuth.value;
    if (!formAuth.valid) {return};
    this.sub = this.authService.login(this.guest).subscribe(
        res => {
          this.userConfig = {...res.user};
          this.authService.isLoggedIn = true;

          if (this.authService.isLoggedIn) {
            const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'dashboard';
            // const redirect = 'dashboard';
            this.router.navigate([redirect]);
          }
        },
        error => {
          this.err = error;
          notifyconfig.message = this.err;
          this.notify.showNotification(notifyconfig);
        }
    );
  }

  public loginWithOIDC() {
    this.oauthService.initImplicitFlow('/some-state;p1=1;p2=2');
  }

  public logoffWithOIDC() {
    this.oauthService.logOut();
  }

  public get name() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {return null};
    return claims;
  }


  ngOnInit() {
    // 动画加载登录界面
    this.isShow = true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
