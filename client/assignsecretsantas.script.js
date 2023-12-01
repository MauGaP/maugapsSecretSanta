function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function assignSecretSantas(participants) {
  shuffleArray(participants);
  let assignments = new Map();

  for (let i = 0; i < participants.length; i++) {
    let nextIndex = (i + 1) % participants.length;
    while (participants[i].partner === participants[nextIndex].name) {
      nextIndex = (nextIndex + 1) % participants.length;

      if (nextIndex === i) {
        throw new Error('Unsolvable Secret Santa assignment for the given constraints.');
      }
    }
    assignments.set(participants[i].name, participants[nextIndex].name);
  }

  return participants.map(participant => ({
    ...participant,
    secretSantaFor: assignments.get(participant.name),
  }));
}
