import { Router } from "express";
import controller from "../controller/user";


class UserRoute {
    router: Router;
    constructor() {
        this.router = Router();
    }
    routes() {
        this.router.post("/test", controller.testapi);
    }
}


const userRoute = new UserRoute;
userRoute.routes();
export default userRoute.router;