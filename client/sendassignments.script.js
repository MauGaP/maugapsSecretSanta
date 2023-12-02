function sendAssignmentsToServer() {
  const assignments = JSON.parse(sessionStorage.getItem('secretSantaAssignments'));
  const language = sessionStorage.getItem('preferredLanguage') || 'es'; // Default to Spanish if not set

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
      language: language, // Include the language preference in the request
    }),
  })
    .then(response => response.text())
    .then(data => {
      console.log('Response from server:', data);
      // Additional UI feedback for success can be added here
    })
    .catch(error => {
      console.error('Error sending assignments:', error);
      // Handle the error in the UI as well
    });
}
