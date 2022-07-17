import { models } from "mongoose";
import { IUser } from "../../../types";
import librarian from "../../services/librarian";
import { success } from "../../utils/http-responses";

const update = async (req, res, next) => {
  let { data }: { data: IUser } = req.body
  let user = await librarian.update("User", { userId: req.user.userId }, data)

  return success(res, { success: true, data: { user } })
}

export default update