import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8cddf83d1b87ce",
    pass: "cd7769f91f843a"
  }
})

export class NodeMailerMailAdapter implements MailAdapter{

  async sendMail({subject, body}: SendMailData) {

      await transport.sendMail({
        from: 'Equipe feedget <oi@feedget.com>',
        to: 'Miguel Cassimiro <miguel.cassimiro99@gmail.com>',
        subject,
        html: body
      })
  }
}