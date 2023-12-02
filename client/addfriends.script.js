function addFriendRow() {
  var table = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();

  var idInput = createInputField('hidden', 'id', table.rows.length);
  appendCell(newRow, idInput, true);

  var nameInput = createInputField('text', 'name', languageData[currentLanguage].defaultName);
  appendCell(newRow, nameInput);

  var emailInput = createInputField('email', 'email', languageData[currentLanguage].defaultEmail);
  appendCell(newRow, emailInput);

  var excludeInput = createInputField('text', 'exclude', '');
  appendCell(newRow, excludeInput);

  var deleteButton = createDeleteButton();
  appendCell(newRow, deleteButton);

  updateDeleteButtonsState();
}

function appendCell(row, element, isHidden = false) {
  const cell = row.insertCell();
  if (isHidden) {
    cell.style.display = 'none';
  }
  cell.appendChild(element);
}

function createInputField(type, name, defaultValue) {
  var input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.value = defaultValue;
  input.onblur = saveToSessionStorage;
  return input;
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
