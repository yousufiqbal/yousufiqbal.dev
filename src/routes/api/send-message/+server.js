import { dev } from '$app/env';
import { error, json } from '@sveltejs/kit'
import nodemailer from 'nodemailer'

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {

    const client = await request.json()

    let transporter = nodemailer.createTransport({
      service: 'Outlook365',
      secure: dev, // true for 465, false for other ports
      auth: {
        user: 'yousufiqbalhashim@outlook.com',
        pass: dev ? import.meta.env.VITE_OUTLOOK_PWD : process.env.OUTLOOK_PWD,
      },
    });

    try {
      let info = await transporter.sendMail({
        from: { name: 'My Website', address: 'yousufiqbalhashim@outlook.com' },
        to: "contact@yosofiqbal.com", // list of receivers
        replyTo: client.email,
        subject: `${client.name} from ${client.email}`,
        text: client.message,
        html: `
          <h2>${client.name}</h2>
          <p>${client.message}</p>
          <br><br>
          <h3>Sender Information</h3>
          <p>Name: ${client.name}</p>
          <p>Email: ${client.email}</p>
          <p>WhatsApp: ${client.whatsapp || 'Not Given'}</p>
        `,
      });
    
      if (dev) console.log("Message sent: %s", info.messageId);

      return json({ message: 'Email sent' })
      
    } catch (err) {
      
      if (dev) console.log(err)
      return error(403, 'Cannot send email')
    }
  
}