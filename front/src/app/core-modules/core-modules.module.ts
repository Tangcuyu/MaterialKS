import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from './user-service.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: UserServiceService, useClass: UserServiceService }
  ],
  exports: [CommonModule]
})
export class CoreModulesModule { }
