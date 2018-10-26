import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../../../core-modules/user-service.service';
import { AuthService } from '../../../core-modules/auth.service';
import { Router } from '@angular/router';
import { User, IUserConfig} from '../../../core-modules/model';
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
  public guest: User; // User will be certified
  public userConfig: IUserConfig;
  public headers: string[];
  public isShow: Boolean; // Auth form animation switch
  public message: string;
  public userName: string;
  public email: string;
  public password: string;
  public submitted: Boolean = false;


  constructor(private userService: UserServiceService, private authService: AuthService, private router: Router) {
    this.setMessage();
  }

  login(formAuth: any) {
    this.message = 'Trying to log in ...';
    this.guest = formAuth.value;
    if (!formAuth.valid) {return};
    this.authService.login(this.guest).subscribe((data: any) => {
      this.setMessage();
      console.log(this.message);
      console.log(data);
      /* if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'dashboard';

        this.router.navigate([redirect]);
      } */
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
    console.log(this.message);
  }


  ngOnInit() {
    // this.showUserConfigResponse();
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

  setMessage() {
    this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  // log the animation information to console
  // onAnimationEvent(event: AnimationEvent) {
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
  // };

  // used for Email formCtrol
  /*  getErrorMessage() {
    return this.userEmail.hasError('required') ? 'You must enter email address' :
      this.userEmail.hasError('email') ? 'Not a valid email' : '';
  } */

}
