"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
var core_1 = require('@angular/core');
var banner_inline_component_1 = require('../banner-inline.component/banner-inline.component');
var platform_browser_1 = require('@angular/platform-browser');
var router_stubs_1 = require('../../testing/router-stubs');
/**
 * Created by arthur.panosyan on 3/25/2017.
 */
describe('AppComponent', function () {
    var fixture;
    var linkDes;
    var links;
    beforeEach(function () {
        fixture = testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent, banner_inline_component_1.BannerInlineComponent,
                router_stubs_1.RouterLinkStubDirective, router_stubs_1.RouterOutletStubComponent
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }).createComponent(app_component_1.AppComponent);
        // trigger initial data binding
        fixture.detectChanges();
        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement
            .queryAll(platform_browser_1.By.directive(router_stubs_1.RouterLinkStubDirective));
        // get the attached link directive instances using the DebugElement injectors
        links = linkDes
            .map(function (de) { return de.injector.get(router_stubs_1.RouterLinkStubDirective); });
    });
    it('can get RouterLinks from template', function () {
        expect(links.length).toBe(3, 'should have 3 links');
        expect(links[0].linkParams).toBe('/dashboard', '1st link should go to Dashboard');
        expect(links[1].linkParams).toBe('/heroes', '1st link should go to Heroes');
    });
    it('can click Heroes link in template', function () {
        var heroesLinkDe = linkDes[1];
        var heroesLink = links[1];
        expect(heroesLink.navigatedTo).toBeNull('link should not have navigated yet');
        heroesLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(heroesLink.navigatedTo).toBe('/heroes');
    });
});
//# sourceMappingURL=app.component.spec.js.map