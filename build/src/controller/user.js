"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../model/user"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.testapi = function (req, res) {
        var payload = req.body.payload;
        var add = new user_1.default(payload);
        add.save(function (error, data) {
            if (error)
                return res.status(400).json({ error: error });
            if (data) {
                return res.status(200).json({ data: data });
            }
        });
    };
    UserController.prototype.findUser = function (req, res) {
        var payload = req.body.payload;
        user_1.default.findOne({ username: payload.username }).exec(function (error, data) {
            if (error)
                return res.status(400).json({ error: error });
            if (data) {
                return res.status(200).json({ data: data });
            }
        });
    };
    return UserController;
}());
exports.default = new UserController;
