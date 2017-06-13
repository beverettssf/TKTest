import { Component } from '@angular/core';

/**
 * Generated class for the SadfadfComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'sadfadf',
  templateUrl: 'sadfadf.html'
})
export class SadfadfComponent {

  text: string;

  constructor() {
    console.log('Hello SadfadfComponent Component');
    this.text = 'Hello World';
  }

}
