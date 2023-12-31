require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendEmails = require('./emailsender');

const app = express();
const port = 3500;

app.use(bodyParser.json());
app.use(cors({ origin: '*' })); // TODO: This allows requests from all origins. Replace with secure url when deployed on prod.

app.post('/send-emails', async (req, res) => {
  console.log('language received: ', req.body.language);
  try {
    await sendEmails(req.body.assignments, req.body.language);
    res.send('Emails sent successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending emails');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
