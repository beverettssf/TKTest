import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SadfadfComponent } from './sadfadf';

@NgModule({
  declarations: [
    SadfadfComponent,
  ],
  imports: [
    IonicPageModule.forChild(SadfadfComponent),
  ],
  exports: [
    SadfadfComponent
  ]
})
export class SadfadfComponentModule {}
