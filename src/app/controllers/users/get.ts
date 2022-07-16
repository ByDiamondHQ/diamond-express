import { IUser } from "../../../types";
import librarian from "../../services/librarian";
import { failure, success } from "../../utils/http-responses";

const get = async (req, res, next) => {
    try {
        let user: IUser = await librarian.findOne("User", { userId: req.user.userId })
        return success(res, { success: true, user }, 200)
    } catch(e) {
        return failure(res, { success: false, message: 'No user found' }, 400)
    }
}

export default get