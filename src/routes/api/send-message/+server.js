import { error, json } from '@sveltejs/kit'
import sgMail from '@sendgrid/mail'
import 'dotenv/config'
import { contactSchema } from '$lib/yup'

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
  
  // TODO make it secure
  let myEmail = 'contact@yosofiqbal.com'

  try {

    // Getting and validating form..
    const body = await request.json()
    const client = await contactSchema.validate(body, { abortEarly: false })
  
    // Setting API Key..
    sgMail.setApiKey(process.env.SENDGRID_KEY)
  
    // Sending email..
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
