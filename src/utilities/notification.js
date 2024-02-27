import nodemailer from "nodemailer";
import config from "config";

const smtp = config.get("smtp");
const transporter = nodemailer.createTransport(smtp);

const sendEmailNotification = (emailOptions) => {
  transporter
    .sendMail(emailOptions)
    .then((info) => {
      logger.info(`Email sent to`,info.envelope.to);
    })
    .catch((error) => {
      logger.info(`Error occurred while sending email ${error}`);
    });
};
module.exports = {
  sendEmailNotification,
};
