import { model, Schema } from "mongoose";
import IUser from "../interface/user";


const userSchema = new Schema({
    username: { type: String, required: true,unique:true },
    email: { type: String, required: true, unique: true },
    password: {type:String,require:true}
}, {timestamps:true})


export default model<IUser>("user", userSchema);


