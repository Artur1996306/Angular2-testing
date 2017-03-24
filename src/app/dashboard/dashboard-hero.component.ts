import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from './hero';
/**
 * Created by arthur.panosyan on 3/24/2017.
 */
@Component({
  selector: 'dashboard-hero',
  template: `<dashboard-hero *ngFor="let hero of heroes" class="col-1-4" [hero]=hero (selected)="gotoDetail($event)"></dashboard-hero>
  <div (click)="click()" class="hero">
    {{hero.name | uppercase}}
  </div>`
})
export class DashboardHeroComponent {
  @Input() hero: Hero;
  @Output() selected = new EventEmitter<Hero>();

  click() {
    this.selected.emit(this.hero);
  }
}
