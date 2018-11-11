import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from './user-service.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service'
import { UserCheckService } from './user-check.service';
import { NotifyService } from './notify.service';
import { Auth0Service } from './auth0.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserServiceService,
    AuthGuardService,
    AuthService,
    Auth0Service,
    UserCheckService,
    NotifyService
  ],
  exports: [CommonModule]
})
export class CoreModulesModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModulesModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

/* 可以在forRoot静态方法中，配置CoreModule模块中的服务提供商
  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    };
  } */
}
