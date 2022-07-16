import { sign } from "jsonwebtoken";
import IUser from "../../../types/User";
import librarian from "../../services/librarian"
import { failure, success } from "../../utils/http-responses"

const login = async (req, res) => {
  const { token } = req.body

  const magicToken = await librarian.findOne("Token", { token: token, active: true })

  if (!magicToken) {
    failure(res, { error: "Token does not exist" }, 404)
  }

  if (!magicToken.active) {
    failure(res, { error: "Token has expired" }, 404)
  }

  await librarian.update("Token", { token: token }, { active: false })

  const user: IUser = await librarian.findOne("User", { userId: magicToken.userId })

  if (!user) {
    failure(res, { error: "User with email does not exist" }, 404)
  }

  const jwtToken = await sign({ userId: user.userId }, process.env.JWT_USERS_KEY)

  return success(res, { success: true, message: "Login token sent", token: jwtToken }, 200)
}

export default login