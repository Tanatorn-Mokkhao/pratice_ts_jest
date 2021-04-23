"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var compression_1 = __importDefault(require("compression"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var user_1 = __importDefault(require("./src/route/user"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        dotenv_1.default.config();
        this.database();
        this.mniddleware();
        this.route();
    }
    Server.prototype.mniddleware = function () {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(morgan_1.default('dev'));
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
        this.app.use(compression_1.default());
    };
    Server.prototype.database = function () {
        mongoose_1.default
            .connect("mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASSWORD + "@cluster0.bezfr.mongodb.net/" + process.env.MONGO_DATABASE + "?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
            .then(function () {
            console.log("connect database successfully..!");
        });
    };
    Server.prototype.route = function () {
        this.app.use("/api", user_1.default);
    };
    Server.prototype.start = function () {
        this.app.listen(process.env.PORT, function () {
            console.log("server is running on port", process.env.PORT);
        });
    };
    return Server;
}());
var server = new Server;
server.start();
