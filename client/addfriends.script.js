function addFriendRow() {
  var table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();

  var idCell = newRow.insertCell(0);
  idCell.textContent = table.rows.length; // Assuming ID is the row number

  var nameCell = newRow.insertCell(1);
  var nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.value = 'Nombre';
  nameCell.appendChild(nameInput);

  var emailCell = newRow.insertCell(2);
  var emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.value = 'correo@example.com';
  emailCell.appendChild(emailInput);

  var excludeCell = newRow.insertCell(3);
  var excludeInput = document.createElement('input');
  excludeInput.type = 'text';
  excludeInput.name = 'exclude';
  excludeInput.value = 'Nombres';
  excludeCell.appendChild(excludeInput);
}
