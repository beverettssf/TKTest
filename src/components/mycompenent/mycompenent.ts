import { Component } from '@angular/core';

/**
 * Generated class for the MycompenentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'mycompenent',
  templateUrl: 'mycompenent.html'
})
export class MycompenentComponent {

  text: string;

  constructor() {
    console.log('Hello MycompenentComponent Component');
    this.text = 'Hello World';
  }

}
