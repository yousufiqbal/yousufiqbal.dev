import { trimObject } from './utils'
let pattern = {
  email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  alpha: /^[a-zA-Z\s]+$/,
  numeric: /^\d+$(\.\d+)?/
}

let Form = { name: '', email: '', whatsapp: '', message: '' }

/**
 * 
 * @param {Form} rawForm 
 * @returns errors object (empty object in no errors)
 */
export const validateContactForm = rawForm => {
  /** @type {Form} */
  let errors = {}
  /** @type {Form} */
  let form = trimObject(rawForm)

  // Name
  if (!form.name) {
    errors.name = 'Required'
  }
  else if (!pattern.alpha.test(form.name)) {
    errors.name = 'Name should only contain alphabets and spaces'
  } else if (form.name.length <= 1 || form.name.length >= 50) {
    errors.name = 'Name should be between 1 to 50 characters in length'
  }

  // Email
  if (!form.email) {
    errors.email = 'Required'
  } else if (!pattern.email.test(form.email)) {
    errors.email = 'Email is invalid'
  }

  // WhatsApp
  if (form.whatsapp && !pattern.numeric.test(form.whatsapp)) {
    errors.whatsapp = 'Invalid Whatsapp Number'
  }

  // Message
  if (!form.message) {
    errors.message = 'Required'
  }
  else if (form.message.length <= 10 || form.message.length >= 5000) {
    errors.message = 'Message should be between 10 and 5000 characters in length'
  }

  return errors

}