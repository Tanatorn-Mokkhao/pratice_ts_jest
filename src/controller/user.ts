import User from "../model/user";
import { Request, Response } from "express";


class UserController {
    public testapi(req: Request, res: Response) {
        const { payload } = req.body;
        const add = new User(payload);
        add.save((error, data) => {
            if (error) return res.status(400).json({ error });
            if (data) {
                return res.status(200).json({ data });
            }
        })
    }
    public findUser(req: Request, res: Response) {
        const { payload } = req.body;
        
        User.findOne({ username: payload.username }).exec((error, data) => {
            if (error) return res.status(400).json({ error });
            if (data) {
                return res.status(200).json({ data });
            }
        })
    }
}

export default new UserController;