const nodemailer = require('nodemailer');
const createSecretSantaEmail = require('./emailtemplate.js');

async function sendEmails(assignments) {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  for (const person of assignments) {
    const emailContent = createSecretSantaEmail(person.name, person.secretSantaFor);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: person.email,
      subject: '🎄Tu amigo invisible esta Navidad🌟',
      html: emailContent,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully to', person.name);
    } catch (error) {
      console.log('Error sending email to', person.name, ':', error);
    }
  }
}

module.exports = sendEmails;
