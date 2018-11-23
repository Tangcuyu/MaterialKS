import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../core-modules/auth.service';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { User, IUserConfig} from '../../../core-modules/model';

// Define animations 动画定义
import { slideInAnimation } from '../../../animations';

// 消息提醒服务
import { NotifyService } from '../../../core-modules/notify.service';
import { INotifyConifg } from '../../../core-modules/model';


import { Subscription, Observable } from 'rxjs/';
import { switchMap } from 'rxjs/operators';


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
  // public userConfig: IUserConfig; // Certified user infomation
  // public headers: string[];
  public isShow: Boolean; // 验证表单动画显示开关
  public message: string; // log infomation
  // public userName: string;
  public email: string;
  public password: string;
  public submitted: Boolean = false;
  public err: string;


  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,
     private notify: NotifyService) {
    // console.log(this.authService);

    }

  login(formAuth: any) {
    if (!formAuth.valid) {return};
    this.sub = this.authService.login(formAuth.value).subscribe(
        res => {
          this.authService.userProfile = {...res.user};
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

  public loginOkta() {
    this.authService.loginWithOkta();
  }

  ngOnInit() {
    // 动画加载登录界面
    this.isShow = true;
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
