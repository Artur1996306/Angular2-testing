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
/**
 * Created by arthur.panosyan on 3/25/2017.
 */
var core_1 = require('@angular/core');
/**
 * Created by arthur.panosyan on 3/23/2017.
 */
var BannerInlineComponent = (function () {
    function BannerInlineComponent() {
        this.title = 'Test Tour of Heroes';
    }
    BannerInlineComponent = __decorate([
        core_1.Component({
            selector: 'app-inline-banner',
            template: '<h1>{{title}}</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], BannerInlineComponent);
    return BannerInlineComponent;
}());
exports.BannerInlineComponent = BannerInlineComponent;
//# sourceMappingURL=banner-inline.component.js.map