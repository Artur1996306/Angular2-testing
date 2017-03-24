// import {async, ComponentFixture, ComponentFixtureAutoDetect, TestBed} from "@angular/core/testing";
// import {By} from "@angular/platform-browser";
// import {DebugElement} from "@angular/core";
// import {BannerComponent} from "./banner.component";
//
//
// describe('BannerComponent (templateUrl)', () => {
//
//   let comp: BannerComponent;
//   let fixture: ComponentFixture<BannerComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [BannerComponent], // declare the test component
//       providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
//     })
//       .compileComponents();  // compile template and css
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(BannerComponent);
//
//     comp = fixture.componentInstance; // BannerComponent test instance
//
//     de = fixture.debugElement.query(By.css('h1'));
//     el = de.nativeElement;
//   });
//
//   it('should display original title', () => {
//     fixture.detectChanges();
//     expect(el.textContent).toContain(comp.title);
//   });
//
//   it('should display a different test title', () => {
//     comp.title = 'Test Title';
//     fixture.detectChanges();
//     expect(el.textContent).toContain('Test Title');
//   });
//
// });
//
//
// /*
//  Copyright 2017 Google Inc. All Rights Reserved.
//  Use of this source code is governed by an MIT-style license that
//  can be found in the LICENSE file at http://angular.io/license
//  */
//# sourceMappingURL=a.js.map