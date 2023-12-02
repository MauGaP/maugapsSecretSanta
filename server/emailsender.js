const nodemailer = require('nodemailer');
const createSecretSantaEmailEN = require('./englishemailtemplate');
const createSecretSantaEmailES = require('./spanishemailtemplate');

async function sendEmails(assignments, language) {
  language = language || 'es';
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const createSecretSantaEmail = language === 'es' ? createSecretSantaEmailES : createSecretSantaEmailEN;

  for (const person of assignments) {
    const emailContent = createSecretSantaEmail(person.name, person.secretSantaFor);

    const subject = language === 'es' ? '🎄Tu amigo invisible esta Navidad🌟' : '🎄Your Secret Santa this Christmas🌟';

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: person.email,
      subject: subject,
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
