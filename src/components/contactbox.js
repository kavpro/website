import React from 'react'
import { Input, TextArea, Submit } from '../components/inputs'
import { Formik } from 'formik'

const Error = () => (
  <div
    css={`
      color: red;
      margin-bottom: 10px;
    `}
  >
    Please enter your email.
  </div>
)
const ContactBox = () => (
  <Formik
    initialValues={{ name: '', email: '', company: '', message: '' }}
    validate={values => {
      let errors = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      } else if (!values.company) {
        errors.company = 'Required'
      }
      return errors
    }}
    onSubmit={(values, { setSubmitting }) => {
      fetch('/mail', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then(response => {
          if (response.status === 200) {
            window.location = window.location + 'contact'
          }
        })
        .catch(error => alert('Something went wrong!'))
      setSubmitting(false)
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <form
        css={`
          display: grid;
        `}
        onSubmit={handleSubmit}
      >
        {errors.email && <Error />}
        <div
          css={`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 10px;
            @media screen and (max-width: 650px){
              grid-template-columns: 1fr;
            }
          `}
        >
          <div
            css={`
              display: grid;
            `}
          >
            <label aira-label="name" htmlFor="name">
              Name
            </label>
            <Input
              aria-label="Fullname"
              id="name"
              type="text"
              placeholder="eg. Juli Day"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div
            css={`
              display: grid;
            `}
          >
            <label aira-label="email" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              aira-label="Email"
              placeholder="eg. judi@juci.com"
              onChange={handleChange}
              value={values.email}
            />
          </div>
        </div>

        <label aira-label="company" htmlFor="company">
          Company
        </label>
        <Input
          id="company"
          type="text"
          aira-label="Company"
          placeholder="eg. Juci Patties Ltd"
          onChange={handleChange}
          value={values.company}
        />

        <label aira-label="message" htmlFor="message">
          Message
        </label>
        <TextArea
          id="message"
          type="text"
          maxLength={500}
          placeholder="Your Message Here"
          value={values.message}
          onChange={handleChange}
        />
        <Submit aria-label="Submit" type="submit" disabled={isSubmitting} />
      </form>
    )}
  </Formik>
)

export default ContactBox
