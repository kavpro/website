const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

// add some security-related headers to the response
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/mail', async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kavbot1@gmail.com',
      pass: 'kavbotkavpro',
    },
  })
  console.log(req.body)
  const { name, email, company = 'NoWhere', message } = req.body

  // setup email data with unicode symbols
  let mailOptions = {
    from: `"${name}"`, // sender address
    to: 'kavbot1@gmail.com', // list of receivers
    subject: `${name} from ${company} ✔`, // Subject line
    text: `${message}\n\n${name} from ${company} ${email}`, // plain text body
  }
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions)
  } catch (error) {
    res.status(500)
    res.send('Something went wrong :(')
  }
  res.redirect(`/`)
})
module.exports = app
