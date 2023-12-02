let defaultNumberOfRows = 2;

function clearParticipants(currentLang) {
  const tableBody = document.getElementById('friendsTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  sessionStorage.removeItem('secretSantaAssignments');

  for (let i = 0; i < defaultNumberOfRows; i++) {
    addFriendRow(currentLang);
  }

  hideMessage();
  updateSendEmailButtonState();
}
