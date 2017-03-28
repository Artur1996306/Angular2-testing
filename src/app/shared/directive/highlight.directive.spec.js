"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var testing_1 = require('@angular/core/testing');
var highlight_directive_1 = require('./highlight.directive');
var platform_browser_1 = require('@angular/platform-browser');
/**
 * Created by arthur.panosyan on 3/25/2017.
 */
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            template: "\n    <h2 highlight=\"yellow\">Something Yellow</h2>\n    <h2 highlight>The Default (Gray)</h2>\n    <h2>No Highlight</h2>\n    <input #box [highlight]=\"box.value\" value=\"cyan\"/>"
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
describe('Directive', function () {
    var fixture;
    var de;
    var bareH2;
    beforeEach(function () {
        fixture = testing_1.TestBed.configureTestingModule({
            declarations: [highlight_directive_1.HighlightDirective, TestComponent]
        })
            .createComponent(TestComponent);
        fixture.detectChanges();
        de = fixture.debugElement.queryAll(platform_browser_1.By.directive(highlight_directive_1.HighlightDirective));
        bareH2 = fixture.debugElement.query(platform_browser_1.By.css('h2:not([highlight])'));
    });
    // color tests
    it('should have three highlighted elements', function () {
        expect(de.length).toBe(3);
    });
    it('should color 1st <h2> background "yellow"', function () {
        var bgColor = de[0].nativeElement.style.backgroundColor;
        expect(bgColor).toBe('yellow');
    });
    it('should color 2nd <h2> background w/ default color', function () {
        var dir = de[1].injector.get(highlight_directive_1.HighlightDirective);
        var bgColor = de[1].nativeElement.style.backgroundColor;
        expect(bgColor).toBe(dir.defaultColor);
    });
    it('should bind <input> background to value color', function () {
        // easier to work with nativeElement
        var input = de[2].nativeElement;
        expect(input.style.backgroundColor).toBe('cyan', 'initial backgroundColor');
        input.value = 'green';
        fixture.detectChanges();
        expect(input.style.backgroundColor).toBe('green', 'changed backgroundColor');
    });
    it('bare <h2> should not have a customProperty', function () {
        expect(bareH2.properties['customProperty']).toBeUndefined();
    });
});
//# sourceMappingURL=highlight.directive.spec.js.map