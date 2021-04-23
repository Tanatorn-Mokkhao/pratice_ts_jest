"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.testapi = function (req, res) {
        res.send("test api");
    };
    return UserController;
}());
exports.default = new UserController;
