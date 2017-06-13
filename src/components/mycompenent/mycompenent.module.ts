import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MycompenentComponent } from './mycompenent';

@NgModule({
  declarations: [
    MycompenentComponent,
  ],
  imports: [
    IonicPageModule.forChild(MycompenentComponent),
  ],
  exports: [
    MycompenentComponent
  ]
})
export class MycompenentComponentModule {}
