import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserAuthComponent } from './auth/user-auth/user-auth.component';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
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
