function addFriendRow() {
  var table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();

  // Create a hidden ID cell with a sequential ID
  var idCell = newRow.insertCell(0);
  idCell.style.display = 'none';
  var idInput = document.createElement('input');
  idInput.type = 'hidden';
  idInput.value = table.rows.length; // Sequential ID based on the row count
  idCell.appendChild(idInput);

  // Name cell with translated default value
  var nameCell = newRow.insertCell(1);
  var nameInput = createInputField('text', 'name', languageData[currentLanguage].defaultName);
  nameCell.appendChild(nameInput);

  // Email cell with translated default value
  var emailCell = newRow.insertCell(2);
  var emailInput = createInputField('email', 'email', languageData[currentLanguage].defaultEmail);
  emailCell.appendChild(emailInput);

  // Create exclude cell
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
