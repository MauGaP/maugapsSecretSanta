function restoreFromSessionStorage() {
  const participants = JSON.parse(sessionStorage.getItem('secretSantaAssignments'));
  if (participants) {
    const table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
<<<<<<< Updated upstream
    // Clear existing table rows
    table.innerHTML = '';

    // Iterate over participants and recreate table rows
    participants.forEach((participant, index) => {
      const row = table.insertRow();
      const idCell = row.insertCell(0);
      const nameCell = row.insertCell(1);
      const emailCell = row.insertCell(2);
      const partnerCell = row.insertCell(3);
      idCell.textContent = index + 1;
      nameCell.innerHTML = `<input type="text" value="${participant.name}">`;
      emailCell.innerHTML = `<input type="email" value="${participant.email}">`;
      partnerCell.innerHTML = `<input type="text" value="${participant.partner}">`;
=======
    table.innerHTML = '';

    storedParticipants.sort((a, b) => parseInt(a.id) - parseInt(b.id));

    storedParticipants.forEach(participant => {
      const row = table.insertRow();

      const idCell = row.insertCell(0);
      idCell.style.display = 'none';
      const idInput = document.createElement('input');
      idInput.type = 'hidden';
      idInput.value = participant.id;
      idCell.appendChild(idInput);

      const nameCell = row.insertCell(1);
      nameCell.innerHTML = `<input type="text" name="name" value="${participant.name}" onblur="saveToSessionStorage()">`;

      const emailCell = row.insertCell(2);
      emailCell.innerHTML = `<input type="email" name="email" value="${participant.email}" onblur="saveToSessionStorage()">`;

      const excludeCell = row.insertCell(3);
      excludeCell.innerHTML = `<input type="text" name="exclude" value="${participant.exclude}" onblur="saveToSessionStorage()">`;
>>>>>>> Stashed changes
    });
  }
}
