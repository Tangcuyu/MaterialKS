import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule, enableDebugTools  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './auth/user-auth/user-auth.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: 'auth',
    component: UserAuthComponent,
    data: { animation: 'auth' }
  },
  {
    path: '',
    redirectTo: 'dashboard',
    data: { animation: 'dashboard' },
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]}
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
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
