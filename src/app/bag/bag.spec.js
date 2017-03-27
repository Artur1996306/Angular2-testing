// import {TestBed} from '@angular/core/testing';
// import {ButtonComponent} from './bag';
// import {By} from '@angular/platform-browser';
//
// import {click} from '../../testing/index';
//
// /**
//  * Created by arthur.panosyan on 3/25/2017.
//  */
// describe('ButtonComponent', () => {
//   // it('should support clicking a button', () => {
//   //   const fixture = TestBed.configureTestingModule({
//   //     declarations: [ButtonComponent]
//   //   }).createComponent(ButtonComponent);
//   //   const btn = fixture.debugElement.query(By.css('button'));
//   //   const span = fixture.debugElement.query(By.css('span')).nativeElement;
//   //
//   //   fixture.detectChanges();
//   //   expect(span.textContent).toMatch(/is off/i, 'before click');
//   //
//   //   click(btn);
//   //   fixture.detectChanges();
//   //   expect(span.textContent).toMatch(/is on/i, 'after click');
//   // });
//
//   let comp: ButtonComponent;
//   beforeEach(() => comp = new ButtonComponent());
//
//   it('#isOn should be false initially', () => {
//     expect(comp.isOn).toBe(false);
//   });
//
//   it('#clicked() should set #isOn to true', () => {
//     comp.clicked();
//     expect(comp.isOn).toBe(true);
//   });
//
//   it('#clicked() should set #message to "is on"', () => {
//     comp.clicked();
//     expect(comp.message).toMatch(/is on/i);
//   });
//
//   it('#clicked() should toggle #isOn', () => {
//     comp.clicked();
//     expect(comp.isOn).toBe(true);
//     comp.clicked();
//     expect(comp.isOn).toBe(false);
//   });
// });
//# sourceMappingURL=bag.spec.js.map