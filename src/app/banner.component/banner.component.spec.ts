import {async, ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {BannerComponent} from './banner.component';

/**
 * Created by arthur.panosyan on 3/23/2017.
 */

describe('BannerComponent (templateUrl)', () => {

  let comp: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
    })
      .compileComponents().then();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should display original title', () => {
    expect(el.textContent).toBe(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

});
