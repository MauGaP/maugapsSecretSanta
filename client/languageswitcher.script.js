function switchLanguage(lang) {
  document.getElementById('headerTitle').textContent = languageData[lang]['headerTitle'];
  document.getElementById('addFriendsButton').textContent = languageData[lang]['addFriends'];
  document.getElementById('clearAllButton').textContent = languageData[lang]['clearAll'];
  document.getElementById('sendEmailsButton').textContent = languageData[lang]['sendEmails'];
  document.getElementById('nameTh').textContent = languageData[lang]['nameTh'];
  document.getElementById('emailTh').textContent = languageData[lang]['emailTh'];
  document.getElementById('exclusionTh').textContent = languageData[lang]['exclusionTh'];

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
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  sessionStorage.setItem('preferredLanguage', currentLanguage); // Store in session storage
  switchLanguage(currentLanguage);
  updateLanguageSwitcherText();
}

function updateLanguageSwitcherText() {
  const switcherText = currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a Español';
  document.getElementById('languageSwitcher').textContent = switcherText;
}
