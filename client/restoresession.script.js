function restoreFromSessionStorage() {
  const participants = JSON.parse(sessionStorage.getItem('secretSantaAssignments'));
  if (participants) {
    const table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
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
    });
  }
}
