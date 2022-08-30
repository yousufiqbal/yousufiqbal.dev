import v from 'validator'
import { trimObject } from './utils'

/**
 * 
 * @param {{ name: '', email: '', whatsapp: '', message: '' }} form 
 * @returns errors object (empty object in no errors)
 */
export const validateContactForm = form => {
  /** @type {Form} */
  let errors = {}
  let form = trimObject(form)

  // Name
  if (!form.name) {
    errors.name = 'Required'
  }
  else if (!v.isAlpha(form.name)) {
    errors.name = 'Name should only contain letters'
  } else if (!v.isLength(form.name, { max: 50, min: 1})) {
    errors.name = 'Name should be between 1 to 50 characters in length'
  }

  // Email
  if (!form.email) {
    errors.email = 'Required'
  } else if (!v.isEmail(form.email)) {
    errors.email = 'Email is invalid'
  }

  // WhatsApp
  if (form.whatsapp && !v.isNumeric(form.whatsapp)) {
    errors.whatsapp = 'Invalid Whatsapp Number'
  }

  // Message
  if (!form.message) {
    errors.message = 'Required'
  }
  else if (!v.isLength(form.message, {min: 10, max: 5000})) {
    errors.message = 'Message should be between 10 and 5000 characters in length'
  }

  return errors
  
}