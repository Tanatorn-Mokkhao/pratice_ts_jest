import express from "express";
import env from "dotenv";


class Server {
    public app: express.Application;
    constructor() {
        this.app = express();
        env.config();
    }
    start() {
        this.app.listen(process.env.PORT, () => {
            console.log("server is running on port", process.env.PORT);
        })
    }
}

const server = new Server;
server.start();