function saveToSessionStorage() {
  const table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  const rows = table.rows;
  const participants = [];

<<<<<<< Updated upstream
  // Gather participant data
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    const participant = {
=======
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    const participant = {
      id: cells[0].getElementsByTagName('input')[0].value,
>>>>>>> Stashed changes
      name: cells[1].getElementsByTagName('input')[0].value,
      email: cells[2].getElementsByTagName('input')[0].value,
      partner: cells[3].getElementsByTagName('input')[0].value,
    };
    participants.push(participant);
  }

  const assignedParticipants = assignSecretSantas(participants);

  sessionStorage.setItem('secretSantaAssignments', JSON.stringify(assignedParticipants));
}
