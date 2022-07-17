
import uniqid from "uniqid";
import IUser from "../../../types/User";
import librarian from "../../services/librarian";
import { failure, success } from "../../utils/http-responses";

const signup = async (req, res) => {
  const { email, name } = req.body

  const existingUser = await librarian.findOne("User", { email: email })

  if (existingUser) {
    failure(res, { success: false, error: "User with email already exists" }, 404)
  }

  let newUser: IUser = await librarian.create("User",
    {
      userId: uniqid('u'),
      email: email,
      displayName: name,
      subscription: {
        isActive: false
      }
    });

  console.log(newUser)

  return success(res, { success: true, data: { message: "User signed up" } }, 200)
}

export default signup