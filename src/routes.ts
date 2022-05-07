import express from 'express'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedbacks-use-case'

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8cddf83d1b87ce",
    pass: "cd7769f91f843a"
  }
})

routes.post('/feedback', async (req, res) => {

  const  { type, comment, screenshot } = req.body
  
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot}
  )

  // await transport.sendMail({
  //   from: 'Equipe feedget <oi@feedget.com>',
  //   to: 'Miguel Cassimiro <miguel.cassimiro99@gmail.com>',
  //   subject: 'Novo Feedback',
  //   html: [
  //     '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
  //     `<p>Tipo de feedback: ${type}</p>`,
  //     `<p>Comentário: ${comment}</p>`,
  //     '</div>'
  //   ].join('\n')
  // })

  return res.status(201).send()
})