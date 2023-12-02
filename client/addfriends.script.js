function addFriendRow() {
  var table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();

  var idCell = newRow.insertCell(0);
<<<<<<< Updated upstream
  idCell.textContent = table.rows.length; // Assuming ID is the row number
=======
  idCell.style.display = 'none';
  var idInput = document.createElement('input');
  idInput.type = 'hidden';
  idInput.value = table.rows.length;
  idCell.appendChild(idInput);
>>>>>>> Stashed changes

  var nameCell = newRow.insertCell(1);
  var nameInput = createInputField('text', 'name', 'Nombre');
  nameCell.appendChild(nameInput);

  var emailCell = newRow.insertCell(2);
  var emailInput = createInputField('email', 'email', 'correo@example.com');
  emailCell.appendChild(emailInput);

  var excludeCell = newRow.insertCell(3);
  var excludeInput = createInputField('text', 'exclude', '');
  excludeCell.appendChild(excludeInput);
}

function createInputField(type, name, value) {
  var input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.value = value;
  input.onblur = saveToSessionStorage; // Attach the onblur event
  return input;
}
