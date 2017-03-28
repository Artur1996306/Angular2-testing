import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {BannerInlineComponent} from './banner-inline.component';

/**
 * Created by arthur.panosyan on 3/25/2017.
 */

describe('BannerInlineComponent (inline template)', () => {

  let comp: BannerInlineComponent;
  let fixture: ComponentFixture<BannerInlineComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerInlineComponent], // declare the test component
    });

    fixture = TestBed.createComponent(BannerInlineComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  xit('Error, but not detected', () => {
    expect(el.textContent).toContain(comp.title);
  });

  it('should display original title', () => {
    expect(el.textContent).toBe('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

});
