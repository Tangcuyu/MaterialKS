
import {filter} from 'rxjs/operators';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'itsi-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  private lang: string;

    constructor(public location: Location, private router: Router, private translateService: TranslateService) {}

  ngOnInit() {
      const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

      // console.log(this.router.routerState);
      // --- set i18n begin ---
      this.translateService.addLangs(['zh', 'en']);
      this.translateService.setDefaultLang('zh');
      const browserLang = this.translateService.getBrowserLang();
      this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    // --- set i18n end ---

      if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
          // if we are on windows OS we activate the perfectScrollbar function

          document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
      } else {
          document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
      }
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

      this.location.subscribe((ev: PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
       this.router.events.subscribe((event: any) => {
          if (event instanceof NavigationStart) {
             if (event.url !== this.lastPoppedUrl) {
                 this.yScrollStack.push(window.scrollY);
             }
         } else if (event instanceof NavigationEnd) {
             if (event.url === this.lastPoppedUrl) {
                 this.lastPoppedUrl = undefined;
                 window.scrollTo(0, this.yScrollStack.pop());
             } else {
                 window.scrollTo(0, 0);
             }
         }
      });
      this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
           elemMainPanel.scrollTop = 0;
           elemSidebar.scrollTop = 0;
      });
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
          let ps = new PerfectScrollbar(elemMainPanel);
          ps = new PerfectScrollbar(elemSidebar);
      }
  }
  ngAfterViewInit() {
      this.runOnRouteChange();
  }
  isMaps(path) {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if (path === titlee) {
          return false;
      } else {
          return true;
      }
  }
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const ps = new PerfectScrollbar(elemMainPanel);
      ps.update();
    }
  }
  isMac(): boolean {
      let bool = false;
      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
          bool = true;
      }
      return bool;
  }
  onLanguageChange() {
    this.lang = this.translateService.currentLang;
    if (this.lang === 'zh') {
        this.translateService.use('en');
    } else {
        this.translateService.use('zh');
    }
  }

}
