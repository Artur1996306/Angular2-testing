import {Router} from '@angular/router';
import {Hero} from './hero';

/**
 * Created by arthur.panosyan on 3/24/2017.
 */

export class DashboardComponent {
  constructor(private router: Router, /*private heroService: HeroService*/) {
  }

  gotoDetail(hero: Hero) {
    let url = `/heroes/${hero.id}`;
    this.router.navigateByUrl(url);
  }

}
