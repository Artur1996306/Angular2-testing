"use strict";
var dashboard_hero_component_1 = require('./dashboard-hero.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var hero_1 = require('./hero');
/**
 * Created by arthur.panosyan on 3/24/2017.
 */
describe('DashboardComponent', function () {
    var comp;
    var fixture;
    var heroEl;
    var el;
    var expectedHero;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dashboard_hero_component_1.DashboardHeroComponent],
        });
        fixture = testing_1.TestBed.createComponent(dashboard_hero_component_1.DashboardHeroComponent);
        comp = fixture.componentInstance;
        heroEl = fixture.debugElement.query(platform_browser_1.By.css('.hero')); // find hero element
        // pretend that it was wired to something that supplied a hero
        expectedHero = new hero_1.Hero(42, 'Test Name');
        comp.hero = expectedHero;
        fixture.detectChanges(); // trigger initial data binding
        el = heroEl.nativeElement.textContent;
    });
    it('should display hero name', function () {
        var expectedPipedName = expectedHero.name.toUpperCase();
        expect(el).toContain(expectedPipedName);
    });
    it('should raise selected event when clicked', function () {
        var selectedHero;
        comp.selected.subscribe(function (hero) { return selectedHero = hero; });
        heroEl.triggerEventHandler('click', null);
        expect(selectedHero).toBe(expectedHero);
    });
    // it('should raise selected event when clicked', () => {
    //   let selectedHero: Hero;
    //   comp.selected.subscribe((hero: Hero) => selectedHero = hero);
    //
    //   click(heroEl);   // triggerEventHandler helper
    //   expect(selectedHero).toBe(expectedHero);
    // });
});
//# sourceMappingURL=dashboard-hero.component.spec.js.map