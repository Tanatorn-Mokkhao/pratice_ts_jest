import User from "../model/user";
import { Request, Response } from "express";


class UserController {
    public testapi(req: Request, res: Response) {
        res.send("test api");
    }
}

export default new UserController;