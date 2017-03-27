/**
 * Created by arthur.panosyan on 3/25/2017.
 */
import { Component } from '@angular/core';

/**
 * Created by arthur.panosyan on 3/23/2017.
 */

@Component({
  selector: 'app-inline-banner',
  template: '<h1>{{title}}</h1>'
})
export class BannerInlineComponent {
  title = 'Test Tour of Heroes';
}
