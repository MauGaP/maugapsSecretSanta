function displayMessage(message, isError = false) {
  const messageArea = document.getElementById('messageArea');
  const friendList = document.querySelector('.friend-list'); // Get the friend-list element

  messageArea.textContent = message;
  messageArea.classList.remove('message-success', 'message-error');
  friendList.classList.remove('with-message'); // Ensure previous message styling is cleared

  if (isError) {
    messageArea.classList.add('message-error');
    friendList.classList.add('with-message'); // Add padding when there is an error message
  } else {
    messageArea.classList.add('message-success');
    friendList.classList.add('with-message'); // Add padding for success message as well
  }

  messageArea.style.display = 'block';
}

function hideMessage() {
  const messageArea = document.getElementById('messageArea');
  const friendList = document.querySelector('.friend-list');
  messageArea.style.display = 'none';
  friendList.classList.remove('with-message');
}

function updateSendEmailButtonState() {
  const storedAssignments = sessionStorage.getItem('secretSantaAssignments');
  const sendEmailButton = document.getElementById('sendEmailsButton');

  if (storedAssignments && JSON.parse(storedAssignments).length > 0) {
    sendEmailButton.disabled = false;
  } else {
    sendEmailButton.disabled = true;
  }
}
