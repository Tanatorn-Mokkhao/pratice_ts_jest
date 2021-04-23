"use strict";
var env = require("dotenv");
var mongoose = require("mongoose");
env.config();
mongoose
    .connect("mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASSWORD + "@cluster0.bezfr.mongodb.net/" + process.env.MONGO_DATABASE + "?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(function () {
    console.log("connect database successfully..!");
});
