function saveToSessionStorage() {
  const table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  const rows = table.rows;
  const participants = [];

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    const participant = {
      id: cells[0].getElementsByTagName('input')[0].value,
      name: cells[1].getElementsByTagName('input')[0].value,
      email: cells[2].getElementsByTagName('input')[0].value,
      exclude: cells[3].getElementsByTagName('input')[0].value,
    };
    participants.push(participant);
  }

  try {
    const assignedParticipants = assignSecretSantas(participants);
    sessionStorage.setItem('secretSantaAssignments', JSON.stringify(assignedParticipants));
  } catch (error) {
    console.error('Error in Secret Santa assignment:', error.message);
    sessionStorage.removeItem('secretSantaAssignments');
  } finally {
    updateDeleteButtonsState();
  }
}
