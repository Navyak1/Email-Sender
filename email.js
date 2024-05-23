document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = 'Sending...';
  
  fetch('send_email.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, subject, message })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      statusMessage.textContent = 'Email sent successfully!';
    } else {
      statusMessage.textContent = 'Failed to send email.';
    }
  })
  .catch(error => {
    statusMessage.textContent = 'Error: ' + error.message;
  });
});
