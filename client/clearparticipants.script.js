let defaultNumberOfRows = 2;

function clearParticipants() {
  // Clear the table
  const tableBody = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  // Optionally, clear the participants from session storage
  sessionStorage.removeItem('secretSantaAssignments');

  // If you want to restore the table to a default state with a specific number of empty rows
  for (let i = 0; i < defaultNumberOfRows; i++) {
    addFriendRow(); // Assuming addFriendRow is your function to add an empty row
  }
}
