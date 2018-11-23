import { Component, OnInit } from '@angular/core';
// Import OAuthservice from angular-oauth2-oidc
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../../core-modules/auth.service';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';



@Component({
  selector: 'itsi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public oauthService: OAuthService, public authService: AuthService, public router: Router) {
    console.log('Pages component: okta-' + this.oauthService.hasValidIdToken());
    console.log('idToken info: ' + this.oauthService.getIdToken());
    if (this.oauthService.hasValidIdToken() || this.authService.userProfile) {
      this.authService.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
  }

}
