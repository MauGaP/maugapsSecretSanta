const nodemailer = require('nodemailer');
const createSecretSantaEmail = require('./emailtemplate.js');

function sendEmails(assignments) {
    const transporter = nodemailer.createTransport({
        service: 'hotmail', // Replace with your preferred service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    assignments.forEach(person => {
        // Generate the email content using the template function
        const emailContent = createSecretSantaEmail(person.name, person.secretSantaFor);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: person.email,
            subject: '🎄Tu amigo invisible esta Navidad🌟',
            html: emailContent // Use the HTML content
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log('Error sending email to', person.name, ':', error);
            } else {
                console.log('Email sent successfully to', person.name);
            }
        });
    });
}

module.exports = sendEmails;
