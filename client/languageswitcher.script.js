function switchLanguage() {
  const currentLang = sessionStorage.getItem('preferredLanguage') || 'es';
  document.getElementById('headerTitle').textContent = languageData[currentLang]['headerTitle'];
  document.getElementById('addFriendsButton').textContent = languageData[currentLang]['addFriends'];
  document.getElementById('clearAllButton').textContent = languageData[currentLang]['clearAll'];
  document.getElementById('sendEmailsButton').textContent = languageData[currentLang]['sendEmails'];

  document.getElementById('nameTh').textContent = languageData[currentLang]['nameTh'];
  document.getElementById('emailTh').textContent = languageData[currentLang]['emailTh'];
  document.getElementById('exclusionTh').textContent = languageData[currentLang]['exclusionTh'];
  document.getElementById('deleteTh').textContent = languageData[currentLang]['deleteTh'];

  updateInputFieldsForLanguageChange(currentLang);

  updateMessageForLanguageChange(currentLang);
}

function updateInputFieldsForLanguageChange(lang) {
  document.querySelectorAll("#friendsTable input[name='name']").forEach(input => {
    if (input.value === languageData['en'].defaultName || input.value === languageData['es'].defaultName) {
      input.value = languageData[lang].defaultName;
    }
  });

  document.querySelectorAll("#friendsTable input[name='email']").forEach(input => {
    if (input.value === languageData['en'].defaultEmail || input.value === languageData['es'].defaultEmail) {
      input.value = languageData[lang].defaultEmail;
    }
  });
}

function toggleLanguage() {
  var currentLang = sessionStorage.getItem('preferredLanguage') || 'es';
  var newLang = currentLang === 'es' ? 'en' : 'es';
  sessionStorage.setItem('preferredLanguage', newLang);
  switchLanguage(newLang);
  updateLanguageSwitcherText(newLang);
}

function updateLanguageSwitcherText(lang) {
  const switcherText = lang === 'es' ? 'Switch to English' : 'Cambiar a Español';
  document.getElementById('languageSwitcher').textContent = switcherText;
}

function updateMessageForLanguageChange(lang) {
  const messageArea = document.getElementById('messageArea');
  if (messageArea.style.display !== 'none') {
    // Check if the message area has an error class to determine the type of message
    const isError = messageArea.classList.contains('message-error');
    const messageType = isError ? 'noAssignments' : 'assignmentsSuccessful'; // Use appropriate keys

    // Display the message in the new language
    displayMessage(languageData[lang][messageType], isError);
  }
}
