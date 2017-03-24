"use strict";
var core_1 = require('@angular/core');
/**
 * Created by arthur.panosyan on 3/23/2017.
 */
core_1.Injectable();
var TwainService = (function () {
    function TwainService() {
    }
    TwainService.prototype.getQuote = function () {
        return Promise.resolve("testQuote");
    };
    return TwainService;
}());
exports.TwainService = TwainService;
//# sourceMappingURL=twain.service.js.map