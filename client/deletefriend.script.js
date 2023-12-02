function deleteRow(button) {
  var row = button.closest('tr');
  if (row) {
    row.parentNode.removeChild(row);
  }

  saveToSessionStorage();

  updateDeleteButtonsState();
  reassignRowIds();
}

function reassignRowIds() {
  const rows = document.getElementById('friendsTable').getElementsByTagName('tbody')[0].rows;
  for (let i = 0; i < rows.length; i++) {
    rows[i].getElementsByTagName('input')[0].value = i + 1;
  }
}

function updateDeleteButtonsState() {
  const rows = document.getElementById('friendsTable').getElementsByTagName('tbody')[0].rows;
  const deleteButtons = document.querySelectorAll('.delete-btn');

  if (rows.length <= 2) {
    deleteButtons.forEach(btn => {
      btn.disabled = true;
      btn.style.color = '#cccccc';
    });
  } else {
    deleteButtons.forEach(btn => {
      btn.disabled = false;
      btn.style.color = '#ff0000';
    });
  }
}
