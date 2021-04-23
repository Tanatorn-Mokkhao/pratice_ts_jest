const env = require("dotenv");
const mongoose = require("mongoose");
env.config();

mongoose
        .connect(
          `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.bezfr.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
          }
        )
        .then(() => {
          console.log("connect database successfully..!");
        });
