"use strict";
var testing_1 = require('@angular/core/testing');
var bag_1 = require('./bag');
var platform_browser_1 = require('@angular/platform-browser');
var index_1 = require('../../testing/index');
/**
 * Created by arthur.panosyan on 3/25/2017.
 */
describe('ButtonComponent', function () {
    //testing with Angular testing utilities
    it('should support clicking a button', function () {
        var fixture = testing_1.TestBed.configureTestingModule({
            declarations: [bag_1.ButtonComponent]
        }).createComponent(bag_1.ButtonComponent);
        var btn = fixture.debugElement.query(platform_browser_1.By.css('button'));
        var span = fixture.debugElement.query(platform_browser_1.By.css('span')).nativeElement;
        fixture.detectChanges();
        expect(span.textContent).toMatch(/is off/i, 'before click');
        index_1.click(btn);
        fixture.detectChanges();
        expect(span.textContent).toMatch(/is on/i, 'after click');
    });
    //testing without Angular testing utilities, only jasmin
    var comp;
    beforeEach(function () { return comp = new bag_1.ButtonComponent(); });
    it('#isOn should be false initially', function () {
        expect(comp.isOn).toBe(false);
    });
    it('#clicked() should set #isOn to true', function () {
        comp.clicked();
        expect(comp.isOn).toBe(true);
    });
    it('#clicked() should set #message to "is on"', function () {
        comp.clicked();
        expect(comp.message).toMatch(/is on/i);
    });
    it('#clicked() should toggle #isOn', function () {
        comp.clicked();
        expect(comp.isOn).toBe(true);
        comp.clicked();
        expect(comp.isOn).toBe(false);
    });
});
//# sourceMappingURL=bag.spec.js.map