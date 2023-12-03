document.addEventListener('DOMContentLoaded', function () {
  initializeApplication();
});

function initializeApplication() {
  var currentLang = sessionStorage.getItem('preferredLanguage') || 'es';

  switchLanguage(currentLang);
  updateLanguageSwitcherText(currentLang);
  restoreFromSessionStorage();
  updateSendEmailButtonState();

  attachEventListeners(currentLang);
}

function attachEventListeners(currentLang) {
  const addFriendButton = document.getElementById('addFriendsButton');
  const clearAllButton = document.getElementById('clearAllButton');
  const sendEmailButton = document.getElementById('sendEmailsButton');
  const languageSwitcher = document.getElementById('languageSwitcher');

  if (addFriendButton) {
    addFriendButton.addEventListener('click', () => addFriendRow(currentLang));
  }
  if (clearAllButton) {
    clearAllButton.addEventListener('click', () => {
      clearParticipants(currentLang);
      hideMessage();
      updateSendEmailButtonState();
    });
  }
  if (sendEmailButton) {
    sendEmailButton.addEventListener('click', () => sendAssignmentsToServer());
  }
  if (languageSwitcher) {
    languageSwitcher.addEventListener('click', () => toggleLanguage());
  }
}
