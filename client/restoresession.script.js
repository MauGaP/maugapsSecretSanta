function restoreFromSessionStorage() {
  const storedParticipants = JSON.parse(sessionStorage.getItem('secretSantaAssignments'));
  if (storedParticipants) {
    const table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Clear existing rows

    // Sort participants by their IDs
    storedParticipants.sort((a, b) => parseInt(a.id) - parseInt(b.id));

    // Repopulate the table
    storedParticipants.forEach(participant => {
      const row = table.insertRow();

      // Hidden ID cell
      const idCell = row.insertCell(0);
      idCell.style.display = 'none';
      const idInput = document.createElement('input');
      idInput.type = 'hidden';
      idInput.value = participant.id;
      idCell.appendChild(idInput);

      // Name cell
      const nameCell = row.insertCell(1);
      nameCell.innerHTML = `<input type="text" name="name" value="${participant.name}" onblur="saveToSessionStorage()">`;

      // Email cell
      const emailCell = row.insertCell(2);
      emailCell.innerHTML = `<input type="email" name="email" value="${participant.email}" onblur="saveToSessionStorage()">`;

      // Exclude cell
      const excludeCell = row.insertCell(3);
      excludeCell.innerHTML = `<input type="text" name="exclude" value="${participant.exclude}" onblur="saveToSessionStorage()">`;
    });
  }
}
