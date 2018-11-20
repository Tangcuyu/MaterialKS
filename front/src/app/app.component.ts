import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OAuthService, NullValidationHandler } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { filter, delay } from 'rxjs/operators';





@Component({
  selector: 'itsi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService, private oauthService: OAuthService) {
    this.configureWithNewConfigApi();
  }

  ngOnInit() {
    // --- set i18n begin ---
    this.translateService.addLangs(['zh', 'en']);
    this.translateService.setDefaultLang('zh');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    // --- set i18n end ---
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage);
    // this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

    this.oauthService.events.subscribe(e => {
      // tslint:disable-next-line:no-console
      console.debug('oauth/oidc event', e);
    });

    this.oauthService.events
      .pipe(filter(e => e.type === 'session_terminated'))
      .subscribe(e => {
        // tslint:disable-next-line:no-console
        console.debug('Your session has been terminated!');
      });

    this.oauthService.events
      .pipe(filter(e => e.type === 'token_received'))
      .subscribe(e => {
        // this.oauthService.loadUserProfile();
      });
  }

}
