import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { OAuthService, NullValidationHandler } from 'angular-oauth2-oidc';


@Component({
  selector: 'itsi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    // --- set i18n begin --- 翻译组件
    this.translateService.addLangs(['zh', 'en']);
    this.translateService.setDefaultLang('zh');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    // --- set i18n end ---
  }
}
