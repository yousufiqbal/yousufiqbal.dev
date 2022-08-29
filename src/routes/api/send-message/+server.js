import { error, json } from '@sveltejs/kit'
import sgMail from '@sendgrid/mail'
import 'dotenv/config'

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {

  let myEmail = 'contact@yosofiqbal.com'

  // Getting and validating form..
  const client = await request.json()

  // TODO validation..

  // Setting API Key..
  sgMail.setApiKey(process.env.SENDGRID_KEY)

  // Sending email..
  try {
    await sgMail.send({
      to: myEmail,
      from: myEmail,
      replyTo: client.email,
      subject: `${client.name} from  ${client.email}`,
      // text: client.message,
      html: `
        <h2>${client.name}</h2>
        <p>${client.message}</p>
        <br><br>
        <h3>Sender Information</h3>
        <p>Name: ${client.name}</p>
        <p>Email: ${client.email}</p>
        <p>WhatsApp: ${client.whatsapp || 'Not Given'}</p>
      `,
    })

    // On success
    return json({ message: 'Email sent' })
  } catch (err) {
    
    // On failure
    return error(403, 'Cannot send email')
    
  }

}
