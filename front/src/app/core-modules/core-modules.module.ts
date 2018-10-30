import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from './user-service.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service'
import { UserCheckService } from './user-check.service';
import { NotifyService } from './notify.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserServiceService,
    AuthGuardService,
    AuthService,
    UserCheckService,
    NotifyService
  ],
  exports: [CommonModule]
})
export class CoreModulesModule { }
