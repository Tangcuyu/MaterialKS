import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../core-modules/user-service.service';
import { AuthService } from '../../../core-modules/auth.service';
import { Router } from '@angular/router';
import { IUserConfig } from '../../../core-modules/model';
// Define animations
import { slideInAnimation } from '../../../animations';
import {
  AnimationEvent
} from '@angular/animations';



@Component({
  selector: 'itsi-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss'],
  animations: [slideInAnimation]
})
export class UserAuthComponent implements OnInit {
  public userConfig: IUserConfig;
  public headers: string[];
  public isShow: Boolean;
  public message: string;
  public userName: string;
  public userEmail: string;
  public password: string;
  public submitted = false;


  constructor(private userService: UserServiceService, private authService: AuthService, private router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.submitted = true;
    console.log(this.message);
    this.authService.login().subscribe(() => {
      this.setMessage();
      console.log(this.message);
      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'dashboard';

        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
    console.log(this.message);
  }

  // log the animation information to console
  onAnimationEvent(event: AnimationEvent) {
    // myInsertRemoveTrigger is trigger name in this example
    // console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done
    // console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 800 or 0.8 second
    // console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either open or closed
    // console.warn(`From: ${event.fromState}`);

    // in our example, toState either open or closed
    // console.warn(`To: ${event.toState}`);

    // the HTML element itself, the div for auth in this case
    // console.warn(`Element: ${event.element}`);
  };

  ngOnInit() {
    this.showUserConfigResponse();
    this.isShow = true;
  }

  // get data from userService with httpclient
  showUserConfig() {
    this.userService.getConfig().subscribe((data: IUserConfig) => {
      this.userConfig = {...data};
    });
  }

  // get full response from userService
  showUserConfigResponse() {
    this.userService.getConfigResponse().subscribe(
      (resp) => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);

        this.userConfig = { ...resp.body };
      }
    );


  }

}
