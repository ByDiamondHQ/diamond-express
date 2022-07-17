import { models } from "mongoose";
import { IUser } from "../../types";
import { verify } from "jsonwebtoken";
import librarian from "../services/librarian";
import { failure } from "../utils/http-responses";

const AuthGuard = async (req, res, next) => {
  try {
    let reqToken: string = req.headers["x-access-token"] || req.headers["authorization"];

    if (!reqToken) {
      return failure(res, { success: false, error: "Unauthorised Access" }, 401)
    }

    const token: string = reqToken.slice(7, reqToken.length);

    verify(token, process.env.JWT_USERS_KEY, async (error, userToken) => {
      if (error) {
        return failure(res, { success: false, error: "Invalid Token" }, 401)
      }

      let user: IUser = await librarian.findOne(models.User, { userId: userToken.userId })

      req.user = user;
      next();
    });
  } catch (e) {
    console.log(e)
    return failure(res, e, 500)
  }
}


export default AuthGuard