function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function isValidAssignment(giver, receiver) {
  if (giver.name === receiver.name) {
    return false;
  }
  let excluded = giver.exclude.split(',').map(name => name.trim().toLowerCase());
  return !excluded.includes(receiver.name.toLowerCase());
}

function tryAssignSecretSantas(participants, maxAttempts = 100) {
  let attempts = 0;

  while (attempts < maxAttempts) {
    shuffleArray(participants);
    let valid = true;
    let assignments = new Map();

    for (let i = 0; i < participants.length; i++) {
      let receiverIndex = (i + 1) % participants.length;
      if (!isValidAssignment(participants[i], participants[receiverIndex])) {
        valid = false;
        break;
      }
      assignments.set(participants[i].name, participants[receiverIndex].name);
    }

    if (valid) {
      return participants.map(participant => ({
        ...participant,
        secretSantaFor: assignments.get(participant.name),
      }));
    }

    attempts++;
  }

  return 'noValidAssignments';
}

function removeDuplicateParticipants(participants) {
  let unique = new Map();
  participants.forEach(p => {
    if (!unique.has(p.name.toLowerCase().trim())) {
      unique.set(p.name.toLowerCase().trim(), p);
    }
  });
  return Array.from(unique.values());
}

function assignSecretSantas(allParticipants) {
  let participants = removeDuplicateParticipants(allParticipants);

  if (checkForDuplicateNames(participants)) {
    return 'duplicateNamesError';
  }

  const assignmentResult = tryAssignSecretSantas(participants);
  if (typeof assignmentResult === 'string') {
    return assignmentResult;
  }

  return assignmentResult;
}

function checkForDuplicateNames(participants) {
  let nameSet = new Set();
  for (let participant of participants) {
    if (nameSet.has(participant.name.toLowerCase())) {
      console.error(`Duplicate name found: ${participant.name}`);
      return true;
    }
    nameSet.add(participant.name.toLowerCase());
  }
  return false;
}
