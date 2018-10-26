import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from './user-service.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service'
import { UserCheckService } from './user-check.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserServiceService,
    AuthGuardService,
    AuthService,
    UserCheckService
  ],
  exports: [CommonModule]
})
export class CoreModulesModule { }
