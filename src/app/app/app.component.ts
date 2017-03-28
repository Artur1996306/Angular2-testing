import {Component} from '@angular/core';
/**
 * Created by arthur.panosyan on 3/25/2017.
 */
@Component({
  selector: 'my-app',
  template: ` <app-inline-banner></app-inline-banner>
              <app-welcome></app-welcome>
  <aaaaa></aaaaa>
              <nav>
                <a routerLink="/dashboard">Dashboard</a>
                <a routerLink="/heroes">Heroes</a>
                <a routerLink="/about">About</a>
              </nav>
              <router-outlet></router-outlet>
  `
})
export class AppComponent { }
