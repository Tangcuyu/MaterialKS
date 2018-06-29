import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const sharedModule = [
  CommonModule,
  TranslateModule
];
@NgModule({
  imports: sharedModule,
  declarations: [],
  exports: sharedModule
})

export class SharedModule { }
