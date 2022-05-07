import express from 'express'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'

const app = express()

app.use(express.json())


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8cddf83d1b87ce",
    pass: "cd7769f91f843a"
  }
});

app.post('/feedback', async (req, res) => {

  const  { type, comment, screenshot } = req.body
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  await transport.sendMail({
    from: 'Equipe feedget <oi@feedget.com>',
    to: 'Miguel Cassimiro <miguel.cassimiro99@gmail.com>',
    subject: 'Novo Feedback',
    html: [
      '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
      `<p>Tipo de feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      '</div>'
    ].join('\n')
  })

  return res.status(201).json({data: feedback})
})

app.listen(3333, () => {
  console.log('HTTP server running')
})
