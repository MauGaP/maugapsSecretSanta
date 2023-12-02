require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendEmails = require('./emailsender');

const app = express();
const port = 3500;

app.use(bodyParser.json());
app.use(cors({ origin: '*' })); // TODO: This allows requests from all origins. Replace with secure url when deployed on prod.

app.post('/send-emails', (req, res) => {
  try {
    const assignments = req.body.assignments; // Expecting assignments to be in the request body
    sendEmails(assignments);
    res.status(200).send('Emails are being sent.');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while sending emails.');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
