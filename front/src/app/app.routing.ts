import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule, } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuardService } from './core-modules/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuardService],     // added canActive and AuthGuard service
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]},
  {
    path: '**',
    component: PageNotFoundComponent
  }
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      routes,
        {enableTracing: true}
      )
  ]
})
export class AppRoutingModule { }
