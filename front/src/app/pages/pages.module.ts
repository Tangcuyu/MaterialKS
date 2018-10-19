import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserAuthComponent } from './auth/user-auth/user-auth.component';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [
    LoginComponent,
    UserAuthComponent
  ],
  exports: [
    LoginComponent,
    UserAuthComponent
  ]
})
export class PagesModule { }
