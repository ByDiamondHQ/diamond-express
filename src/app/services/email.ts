
import config from "../../config/globals"
import { createTransport } from "nodemailer"
import generateContent from "../utils/email-content";

const transporter = createTransport({
  host: config.EMAIL.HOST,
  port: config.EMAIL.PORT,
  auth: {
    user: config.EMAIL.USER,
    pass: config.EMAIL.PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

const Mailer = async (to, subject, template, data) => {
  let { html, text } = await generateContent(template, data)

  const emailBody = {
    from: config.EMAIL.SENDER,
    to: to,
    subject: subject,
    html: html,
    text: text,
  };

  try {
    await transporter.sendMail(emailBody, function (err, info) {
      if (err) console.log(err);
      else return info;
    });

  } catch (error) {
    console.log(error)

    return
  }

  return;
}


export default Mailer