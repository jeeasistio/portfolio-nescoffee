import nodemailer from 'nodemailer'
import { SendEmailArgs } from '../graphql/generatedTypes'
import { OrderType } from '../hooks/ContactFormContext'

const sendEmail = async (form: SendEmailArgs) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GOOGLE_USER,
      pass: process.env.GOOGLE_PASS
    }
  })

  const inquiryText = `${form.name} wants to inquire. ${form.message}`
  const orderText = `${form.name} ordered ${form.quantity} ${form.product}. ${form.message}`

  const sendingEmail = {
    from: `${form.name}, ${form.email}`,
    to: process.env.ADMIN_USER,
    subject: `${form.type}`,
    text: form.type === OrderType.order ? orderText : inquiryText
  }

  await transporter.sendMail(sendingEmail)

  return { message: 'Message Sent' }
}

export default sendEmail
