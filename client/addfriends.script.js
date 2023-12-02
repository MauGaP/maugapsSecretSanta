function addFriendRow() {
  var table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();

  var idCell = newRow.insertCell(0);
  idCell.style.display = 'none';
  var idInput = document.createElement('input');
  idInput.type = 'hidden';
  idInput.value = table.rows.length;
  idCell.appendChild(idInput);

  var nameCell = newRow.insertCell(1);
  var nameInput = createInputField('text', 'name', languageData[currentLanguage].defaultName);
  nameCell.appendChild(nameInput);

  var emailCell = newRow.insertCell(2);
  var emailInput = createInputField('email', 'email', languageData[currentLanguage].defaultEmail);
  emailCell.appendChild(emailInput);

  var excludeCell = newRow.insertCell(3);
  var excludeInput = createInputField('text', 'exclude', '');
  excludeCell.appendChild(excludeInput);
}

function createInputField(type, name, defaultValue) {
  var input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.value = defaultValue;
  input.onblur = saveToSessionStorage;
  return input;
}
