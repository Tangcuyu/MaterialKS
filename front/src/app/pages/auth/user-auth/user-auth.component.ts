import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../../../core-modules/user-service.service';
import { UserCheckService } from '../../../core-modules/user-check.service';
import { AuthService } from '../../../core-modules/auth.service';
import { Router } from '@angular/router';
import { User, IUserConfig} from '../../../core-modules/model';
// Define animations
import { slideInAnimation } from '../../../animations';
import { NotifyService } from '../../../core-modules/notify.service';
import { INotifyConifg } from '../../../core-modules/model';

import {
  AnimationEvent
} from '@angular/animations';


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
export class UserAuthComponent implements OnInit {
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


  constructor(private userService: UserServiceService, private userCheck: UserCheckService,
    private authService: AuthService, private router: Router, private notify: NotifyService) {}

  login(formAuth: any) {
    this.guest = formAuth.value;
    if (!formAuth.valid) {return};
    this.authService.login(this.guest).subscribe(
        res => {
          this.userConfig = {...res.user};
          // console.log(this.userConfig);
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

    // Get full repsonse from server
    /* this.userCheck.checkUser(this.guest).subscribe(
      (resp) => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
        this.userConfig = { ...resp.body };
        console.log(this.headers);
        console.log(this.userConfig);
      },
      error => {
        console.log(error);
      }
    ); */
  }


  ngOnInit() {
    // 动画加载登录界面
    this.isShow = true;
  }
}
