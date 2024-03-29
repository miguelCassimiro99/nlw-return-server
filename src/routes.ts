import express from 'express'
import { NodeMailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedbacks-use-case'

export const routes = express.Router()

routes.post('/feedback', async (req, res) => {

  const  { type, comment, screenshot } = req.body
  
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodeMailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot}
  )

  return res.status(201).send()
})