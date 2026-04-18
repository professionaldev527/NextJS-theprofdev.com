import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const { error } = await resend.batch.send([
    // 1. Thank You Template to the VISITOR
    {
      from: 'Kaushik Adithya E <contact@theprofdev.com>',
      to: [email],
      subject: 'Thank you for your message!',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f5; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <div style="background: linear-gradient(-90deg, #33a381 0%, #129840 100%); padding: 25px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Message Received</h1>
            </div>
            <div style="padding: 30px;">
              <p style="font-size: 16px; color: #333333;">Hi <strong>${name}</strong>,</p>
              <p style="font-size: 16px; color: #555555; line-height: 1.6;">
                Thank you for contacting <strong>contact@theprofdev.com</strong>. I have successfully received your message and will get back to you shortly.
              </p>
              
              <div style="margin-top: 30px; background-color: #f9fafb; padding: 20px; border-left: 4px solid #129840; border-radius: 4px;">
                <h3 style="margin-top: 0; font-size: 16px; color: #111111; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Your Details</h3>
                <p style="margin: 8px 0; color: #444444;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 8px 0; color: #444444;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 8px 0; color: #444444;"><strong>Subject:</strong> ${subject}</p>
                <p style="margin: 16px 0 6px 0; color: #444444;"><strong>Message:</strong></p>
                <p style="margin: 0; color: #555555; white-space: pre-wrap; font-style: italic bg-white p-3 rounded border">"${message}"</p>
              </div>

              <p style="margin-top: 35px; font-size: 15px; color: #444444;">
                Best regards,<br/>
                <strong>Kaushik Adithya E</strong><br/>
                <span style="color: #888; font-size: 13px;">Junior Full-Stack Developer</span>
              </p>
            </div>
          </div>
        </div>
      `,
    },
    // 2. Notification to YOU
    {
      from: 'Portfolio System <contact@theprofdev.com>',
      to: ['contact@theprofdev.com'],
      replyTo: email,
      subject: `[Portfolio Lead] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #129840;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    }
  ])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
