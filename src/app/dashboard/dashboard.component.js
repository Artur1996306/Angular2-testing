"use strict";
/**
 * Created by arthur.panosyan on 3/24/2017.
 */
var DashboardComponent = (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var url = "/heroes/" + hero.id;
        this.router.navigateByUrl(url);
    };
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map