const nodemailer = require('nodemailer');
require('dotenv').config({ path: __dirname + '/../.env' });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'angelusproductions@gmail.com',
    pass: process.env.GMAIL_PASSWORD
  }
})

async function sendContactForm(name, email, message) {
  try {
    const mailOptions = {
      from: 'angelusproductions@gmail.com',
      to: 'angelusproductions@gmail.com',
      subject: `${name} messaged you through angelusproductions.com!`,
      text: `From: ${name} (${email})\n\n${message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      throw(error)
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });

    return { isSuccess: true, error: null }
  } catch (e) {
    console.log(e);
    return { isSuccess: false, error: e }
  }
}

exports.sendContactForm = sendContactForm;