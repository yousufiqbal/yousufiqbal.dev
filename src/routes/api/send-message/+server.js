import { dev } from '$app/environment';
import { SMTP_PASSWORD } from '$env/static/private';
import { error, json } from '@sveltejs/kit'
import nodemailer from 'nodemailer'

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {

    const client = await request.json()

    // console.log(smtp)
    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false,
        auth: {
            user: '7b8818005@smtp-brevo.com',
            pass: SMTP_PASSWORD
        }
    });
    
      try {
  
        let info = await transporter.sendMail({
          from: { name: 'My Website', address: 'contact@yousufiqbal.dev' },
          to: 'contact@yousufiqbal.dev',
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
        throw error(403, 'Cannot send email')
      }
}