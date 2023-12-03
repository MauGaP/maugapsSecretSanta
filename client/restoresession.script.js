function restoreFromSessionStorage() {
  hideMessage();
  const storedParticipants = JSON.parse(sessionStorage.getItem('secretSantaAssignments'));
  if (storedParticipants) {
    const table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
    table.innerHTML = '';

    storedParticipants.sort((a, b) => parseInt(a.id) - parseInt(b.id));

    storedParticipants.forEach(participant => {
      const row = table.insertRow();

      const idInput = createInputField('hidden', 'id', participant.id);
      appendCell(row, idInput, true);

      const nameInput = createInputField('text', 'name', participant.name);
      appendCell(row, nameInput);

      const emailInput = createInputField('email', 'email', participant.email);
      appendCell(row, emailInput);

      const excludeInput = createInputField('text', 'exclude', participant.exclude);
      appendCell(row, excludeInput);

      const deleteButton = createDeleteButton();
      appendCell(row, deleteButton);
    });

    updateDeleteButtonsState();
  }
}

function appendCell(row, element, isHidden = false) {
  const cell = row.insertCell();
  if (isHidden) {
    cell.style.display = 'none';
  }
  cell.appendChild(element);
}

function createDeleteButton() {
  const button = document.createElement('button');
  button.className = 'delete-btn';
  button.onclick = function () {
    deleteRow(this);
  };
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-trash-can';
  button.appendChild(icon);
  return button;
}
