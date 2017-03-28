"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var banner_inline_component_1 = require('./banner-inline.component');
/**
 * Created by arthur.panosyan on 3/25/2017.
 */
describe('BannerInlineComponent (inline template)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [banner_inline_component_1.BannerInlineComponent],
        });
        fixture = testing_1.TestBed.createComponent(banner_inline_component_1.BannerInlineComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    xit('Error, but not detected', function () {
        expect(el.textContent).toContain(comp.title);
    });
    it('should display original title', function () {
        expect(el.textContent).toBe('');
    });
    it('should display original title', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
    it('should display a different test title', function () {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });
});
//# sourceMappingURL=banner-inline.component.spec.js.map