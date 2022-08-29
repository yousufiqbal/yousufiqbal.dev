/* eslint-disable */
import * as yup from 'yup'

yup.setLocale({
  mixed: {
    'required': 'Required'
  }
})

yup.addMethod(yup.mixed, 'ne', function () {
  return this.transform(value => {
    if (value == '' || value == "") return undefined
    return value
  })
})

export const extractYupErrors = err => {
  return err.inner.reduce((acc, err) => {
    return { ...acc, [err.path]: err.message };
  }, {});
}

// Example..
export const contactSchema = yup.object({
  name: yup.string().trim().min(1).max(50).required().ne(),
  email: yup.string().trim().email().required().ne(),
  whatsapp: yup.string().trim().min(5).max(50).ne(),
  message: yup.string().trim().min(10).max(5000).required().ne(),
}).noUnknown(true)