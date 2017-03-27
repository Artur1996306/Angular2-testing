import {Component} from '@angular/core';
/**
 * Created by arthur.panosyan on 3/25/2017.
 */
@Component({
  selector: 'button-comp',
  template: `
    <button (click)="clicked()">Click me!</button>
    <span>{{message}}</span>`
})
export class ButtonComponent {
  isOn = false;

  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }
}
