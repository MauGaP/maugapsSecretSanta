function saveToSessionStorage() {
  const currentLang = sessionStorage.getItem('preferredLanguage') || 'es';
  const table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  const rows = table.rows;
  const participants = [];

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    const participant = {
      id: cells[0].getElementsByTagName('input')[0].value,
      name: cells[1].getElementsByTagName('input')[0].value.trim(), // Trim whitespace
      email: cells[2].getElementsByTagName('input')[0].value,
      exclude: cells[3].getElementsByTagName('input')[0].value,
    };
    participants.push(participant);
  }

  // Check for duplicate names before trying to assign
  if (hasDuplicateNames(participants)) {
    displayMessage(languageData[currentLang]['duplicateNamesError'], true);
    sessionStorage.removeItem('secretSantaAssignments');
    updateSendEmailButtonState();
    return; // Exit the function to avoid further processing
  }

  try {
    const assignedParticipants = assignSecretSantas(participants);
    sessionStorage.setItem('secretSantaAssignments', JSON.stringify(assignedParticipants));
    displayMessage(languageData[currentLang]['assignmentsSuccessful'], false);
  } catch (error) {
    console.error('Error in Secret Santa assignment:', error);
    sessionStorage.removeItem('secretSantaAssignments');
    displayMessage(languageData[currentLang]['noAssignments'], true);
  } finally {
    updateDeleteButtonsState();
  }
}

function hasDuplicateNames(participants) {
  const nameSet = new Set();
  for (const participant of participants) {
    const name = participant.name.toLowerCase();
    if (nameSet.has(name)) {
      return true; // Duplicate found
    }
    nameSet.add(name);
  }
  return false; // No duplicates
}
