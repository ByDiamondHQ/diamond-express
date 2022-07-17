import uniqid from "uniqid";
import { Request } from "express";
import Mailer from "../../services/email";
import librarian from "../../services/librarian"
import { ILoginRequest, IUser } from "../../../types"
import { failure, success } from "../../utils/http-responses"

const token = async (req: Request, res) => {
  const { email } = req.body

  const user: IUser = await librarian.findOne("User", { email: email.toLowerCase() })

  if (!user) {
    failure(res, { success: false, error: "User with email does not exist" }, 404)
  }

  const requestToken = uniqid('fm')

  const token: ILoginRequest = await librarian.create("User", {
    token: requestToken,
    userId: user.userId,
    active: true
  })

  if (process.env.ENVIRONMENT === "prod") {
    Mailer(
      user.email,
      "Login Token",
      'default',
      {
        name: user.displayName,
        message: `Here's your login token - ${token.token} <br /><br />`
      }
    )
  } else {
    console.log(token)
  }

  return success(res, { success: true, data: { message: "Login token sent" } }, 200)
}

export default token