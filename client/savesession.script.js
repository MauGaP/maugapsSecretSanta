function saveToSessionStorage() {
  const table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  const rows = table.rows;
  const participants = [];

  // Gather participant data, including the hidden ID
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    const participant = {
      id: cells[0].getElementsByTagName('input')[0].value, // Hidden ID
      name: cells[1].getElementsByTagName('input')[0].value,
      email: cells[2].getElementsByTagName('input')[0].value,
      partner: cells[3].getElementsByTagName('input')[0].value,
    };
    participants.push(participant);
  }

  // Assign Secret Santas
  const assignedParticipants = assignSecretSantas(participants);

  // Save assignments to session storage
  sessionStorage.setItem('secretSantaAssignments', JSON.stringify(assignedParticipants));
}
