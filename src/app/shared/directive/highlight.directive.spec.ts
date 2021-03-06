import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HighlightDirective} from './highlight.directive';
import {By} from '@angular/platform-browser';

/**
 * Created by arthur.panosyan on 3/25/2017.
 */

@Component({
  template: `
    <h2 highlight="yellow">Something Yellow</h2>
    <h2 highlight>The Default (Gray)</h2>
    <h2>No Highlight</h2>
    <input #box [highlight]="box.value" value="cyan"/>`
})
class TestComponent {
}
describe('Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement[];
  let bareH2: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent]
    })
      .createComponent(TestComponent);
    fixture.detectChanges();
    de = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    bareH2 = fixture.debugElement.query(By.css('h2:not([highlight])'));
  });
// color tests
  it('should have three highlighted elements', () => {
    expect(de.length).toBe(3);
  });
  it('should color 1st <h2> background "yellow"', () => {
    const bgColor = de[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });
  it('should color 2nd <h2> background w/ default color', () => {
    const dir = de[1].injector.get(HighlightDirective) as HighlightDirective;
    const bgColor = de[1].nativeElement.style.backgroundColor;
    expect(bgColor).toBe(dir.defaultColor);
  });
  it('should bind <input> background to value color', () => {
    // easier to work with nativeElement
    const input = de[2].nativeElement as HTMLInputElement;
    expect(input.style.backgroundColor).toBe('cyan', 'initial backgroundColor');
    input.value = 'green';
    fixture.detectChanges();
    expect(input.style.backgroundColor).toBe('green', 'changed backgroundColor');
  });

  it('bare <h2> should not have a customProperty', () => {
    expect(bareH2.properties['customProperty']).toBeUndefined();
  });
});
