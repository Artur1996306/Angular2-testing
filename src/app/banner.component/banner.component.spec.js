"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var banner_component_1 = require('./banner.component');
/**
 * Created by arthur.panosyan on 3/23/2017.
 */
describe('BannerComponent (templateUrl)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [banner_component_1.BannerComponent],
            providers: [{ provide: testing_1.ComponentFixtureAutoDetect, useValue: true }]
        })
            .compileComponents().then(); // compile template and css
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(banner_component_1.BannerComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    it('should display original title', function () {
        expect(el.textContent).toBe(comp.title);
    });
    it('should display a different test title', function () {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });
});
//# sourceMappingURL=banner.component.spec.js.map