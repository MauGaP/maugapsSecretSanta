function sendAssignmentsToServer() {
<<<<<<< Updated upstream
    const assignments = JSON.parse(sessionStorage.getItem('secretSantaAssignments'));
    if (!assignments) {
        console.error('No assignments found in session storage');
        return;
    }

    fetch('http://localhost:3500/send-emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assignments: assignments })
    })
    .then(response => response.text())
    .then(data => {
        console.log('Response from server:', data);
        // You can add more UI feedback here, e.g., a success message
    })
    .catch(error => {
        console.error('Error sending assignments:', error);
        // Handle the error in the UI as well
=======
  const assignments = JSON.parse(sessionStorage.getItem('secretSantaAssignments'));
  const language = sessionStorage.getItem('preferredLanguage') || 'es';

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
      language: language,
    }),
  })
    .then(response => response.text())
    .then(data => {
      console.log('Response from server:', data);
    })
    .catch(error => {
      console.error('Error sending assignments:', error);
>>>>>>> Stashed changes
    });
}
