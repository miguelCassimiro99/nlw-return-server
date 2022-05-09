import { type } from "os";
import { SubmitFeedbackUseCase } from "./submit-feedbacks-use-case";

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit Feedback', () => {
  it('should be able to submit feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Testing BUG',
      screenshot: 'data:image/png;base64,'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Testing BUG',
      screenshot: 'data:image/png;base64,'
    })).rejects.toThrow()
  })

  it('should not be able submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,'
    })).rejects.toThrow()
  })

  it('should not be able submit feedback with screenshot out of format', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'test.jpg'
    })).rejects.toThrow()
  })
});