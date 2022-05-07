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

  // transport.sendMail({

  // })

  return res.status(201).json({data: feedback})
})

app.listen(3333, () => {
  console.log('HTTP server running')
})
