import { Request } from "express";
import IUser from "./User";

export default interface AuthRequest extends Request {
    user: IUser
}