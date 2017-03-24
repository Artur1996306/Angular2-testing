"use strict";
var testing_1 = require('@angular/core/testing');
var twain_component_1 = require('./twain.component');
var platform_browser_1 = require('@angular/platform-browser');
var twain_service_1 = require('./twain.service');
/**
 * Created by arthur.panosyan on 3/23/2017.
 */
describe('TwainComponent (templateUrl)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    var twainService;
    var spy;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [twain_component_1.TwainComponent],
            providers: [twain_service_1.TwainService],
        });
        fixture = testing_1.TestBed.createComponent(twain_component_1.TwainComponent);
        comp = fixture.componentInstance;
        // TwainService actually injected into the component
        twainService = fixture.debugElement.injector.get(twain_service_1.TwainService);
        // Setup spy on the `getQuote` method
        spy = spyOn(twainService, 'getQuote')
            .and.returnValue(Promise.resolve('testQuote'));
        // Get the Twain quote element by CSS selector (e.g., by class name)
        de = fixture.debugElement.query(platform_browser_1.By.css('.twain'));
        el = de.nativeElement;
    });
    it('should not show quote before OnInit', function () {
        expect(el.textContent).toBe('', 'nothing displayed');
        expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
    });
    it('should still not show quote after component initialized', function () {
        fixture.detectChanges();
        // getQuote service is async => still has not returned with quote
        expect(el.textContent).toBe('...', 'no quote yet');
        expect(spy.calls.any()).toBe(true, 'getQuote called');
    });
    it('should show quote after getQuote promise (async)', testing_1.async(function () {
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            fixture.detectChanges(); // update view with quote
            expect(el.textContent).toBe('testQuote');
        });
    }));
    it('should show quote after getQuote promise (fakeAsync)', testing_1.fakeAsync(function () {
        fixture.detectChanges();
        testing_1.tick(); // wait for async getQuote
        fixture.detectChanges(); // update view with quote
        expect(el.textContent).toBe('testQuote');
    }));
});
//# sourceMappingURL=twain.component.spec.js.map