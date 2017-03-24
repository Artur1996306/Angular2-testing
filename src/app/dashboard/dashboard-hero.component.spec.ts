import {DashboardHeroComponent} from './dashboard-hero.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {click} from '../../testing/index';
import {Hero} from './hero';

/**
 * Created by arthur.panosyan on 3/24/2017.
 */

describe('DashboardComponent', () => {
  let comp: DashboardHeroComponent;
  let fixture: ComponentFixture<DashboardHeroComponent>;
  let heroEl: DebugElement;
  let el: HTMLElement;
  let expectedHero: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardHeroComponent],
    });
    fixture = TestBed.createComponent(DashboardHeroComponent);
    comp = fixture.componentInstance;
    heroEl = fixture.debugElement.query(By.css('.hero')); // find hero element

    // pretend that it was wired to something that supplied a hero
    expectedHero = new Hero(42, 'Test Name');
    comp.hero = expectedHero;

    fixture.detectChanges(); // trigger initial data binding
    el = heroEl.nativeElement.textContent;
  });

  it('should display hero name', () => {
    const expectedPipedName = expectedHero.name.toUpperCase();
    expect(el).toContain(expectedPipedName);
  });

  it('should raise selected event when clicked', () => {
    let selectedHero: Hero;
    comp.selected.subscribe((hero: Hero) => selectedHero = hero);

    heroEl.triggerEventHandler('click', null);
    expect(selectedHero).toBe(expectedHero);
  });

  // it('should raise selected event when clicked', () => {
  //   let selectedHero: Hero;
  //   comp.selected.subscribe((hero: Hero) => selectedHero = hero);
  //
  //   click(heroEl);   // triggerEventHandler helper
  //   expect(selectedHero).toBe(expectedHero);
  // });


});
