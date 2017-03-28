import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {BannerInlineComponent} from '../banner-inline.component/banner-inline.component';
import {By} from '@angular/platform-browser';
import {RouterLinkStubDirective, RouterOutletStubComponent} from '../../testing/router-stubs';
/**
 * Created by arthur.panosyan on 3/25/2017.
 */

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let linkDes: any;
  let links: any;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        AppComponent, BannerInlineComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).createComponent(AppComponent);

    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map((de: any) => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(3, 'should have 3 links');
    expect(links[0].linkParams).toBe('/dashboard', '1st link should go to Dashboard');
    expect(links[1].linkParams).toBe('/heroes', '1st link should go to Heroes');
  });

  it('can click Heroes link in template', () => {
    const heroesLinkDe = linkDes[1];
    const heroesLink = links[1];

    expect(heroesLink.navigatedTo).toBeNull('link should not have navigated yet');

    heroesLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(heroesLink.navigatedTo).toBe('/heroes');
  });

});
