import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import compression from "compression";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import userRoute from "./src/route/user";
class Server {
    public app: express.Application;
    constructor() {
        this.app = express();
        env.config();
      this.database();
      this.mniddleware();
      this.route();
  }
  mniddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(compression());
  }
    database() {
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
  }
  route() {
    this.app.use("/api", userRoute);

  }
    start() {
        this.app.listen(process.env.PORT, () => {
            console.log("server is running on port", process.env.PORT);
        })
    }
}

const server = new Server;
server.start();
export default server.app;