import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RemoteValidatorDirective } from './remote-validator.directive';

const sharedModule = [
  CommonModule,
  TranslateModule
];
@NgModule({
  imports: sharedModule,
  declarations: [
    RemoteValidatorDirective
  ],
  exports: [
    sharedModule,
    RemoteValidatorDirective
  ]
})

export class SharedModule { }
