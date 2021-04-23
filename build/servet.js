"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        dotenv_1.default.config();
    }
    Server.prototype.start = function () {
        this.app.listen(process.env.PORT, function () {
            console.log("server is running on port", process.env.PORT);
        });
    };
    return Server;
}());
var server = new Server;
server.start();
