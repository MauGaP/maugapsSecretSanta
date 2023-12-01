function restoreFromSessionStorage() {
  const participants = JSON.parse(sessionStorage.getItem('secretSantaAssignments'));
  if (participants) {
    const table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
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
    });
  }
}
