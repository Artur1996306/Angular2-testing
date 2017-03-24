import {Component, OnInit} from '@angular/core';
import {TwainService} from './twain.service';
/**
 * Created by arthur.panosyan on 3/23/2017.
 */
@Component({
  selector: 'twain-quote',
  template: '<p class="twain"><i>{{quote}}</i></p>'
})
export class TwainComponent  implements OnInit {
  intervalId: number;
  quote = '...';
  constructor(private twainService: TwainService) { }

  ngOnInit(): void {
    this.twainService.getQuote().then(quote => this.quote = quote);
  }
}
