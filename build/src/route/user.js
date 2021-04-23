"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("../controller/user"));
var UserRoute = /** @class */ (function () {
    function UserRoute() {
        this.router = express_1.Router();
    }
    UserRoute.prototype.routes = function () {
        this.router.get("/test", user_1.default.testapi);
    };
    return UserRoute;
}());
var userRoute = new UserRoute;
userRoute.routes();
exports.default = userRoute.router;
