import { dev } from '$app/environment';
import { pb } from '$lib/database/db';
import { error, json } from '@sveltejs/kit'
import nodemailer from 'nodemailer'

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {

    const client = await request.json()

    const smtp = await pb.collection('smtp').getOne('v6wggv7py2kp62h')
    const transporter = nodemailer.createTransport({
        host: smtp.host,
        port: smtp.port,
        secure: false,
        auth: {
            user: smtp.username,
            pass: smtp.password
        }
    });
    
      try {
  
        let info = await transporter.sendMail({
          from: { name: 'My Website', address: 'yousufiqbalhashim@outlook.com' },
          to: "contact@yousufiqbal.dev", // list of receivers
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