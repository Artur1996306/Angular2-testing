"use strict";
var core_1 = require('@angular/core');
/**
 * Created by arthur.panosyan on 3/23/2017.
 */
core_1.Injectable();
var UserService = (function () {
    function UserService() {
        this.isLoggedIn = true;
        this.user = { name: 'Test User' };
    }
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map