function sendAssignmentsToServer() {
  const assignments = JSON.parse(sessionStorage.getItem('secretSantaAssignments'));
  const currentLanguage = sessionStorage.getItem('preferredLanguage') || 'es';

  if (!assignments) {
    console.error('No assignments found in session storage');
    return;
  }

  fetch('http://localhost:3500/send-emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      assignments: assignments,
      language: currentLanguage,
    }),
  })
    .then(response => response.text())
    .then(data => {
      console.log('Response from server:', data);
    })
    .catch(error => {
      console.error('Error sending assignments:', error);
    });
}
