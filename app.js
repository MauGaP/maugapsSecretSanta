require('dotenv').config();
const fs = require('fs');
const sendEmails = require('./emailSender');
const participants = JSON.parse(fs.readFileSync('participants.json', 'utf-8'));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function assignSecretSantas(participants) {
  shuffleArray(participants);
  let assignments = new Map();
  let available = new Set(participants.map(p => p.name));

  participants.forEach(participant => {
    available.delete(participant.name);
    available.delete(participant.partner);

    // Find a random person who is not the participant's partner
    let choices = Array.from(available);
    shuffleArray(choices);
    let receiver = choices[0];

    assignments.set(participant.name, receiver);
    available.add(participant.partner);
  });

  return participants.map(participant => ({
    ...participant,
    secretSantaFor: assignments.get(participant.name),
  }));
}

// Main execution
const assignments = assignSecretSantas(participants);
// console.log(assignments);
sendEmails(assignments);
