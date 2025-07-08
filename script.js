const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Optional: contact form alert
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thanks for contacting me!");
  e.target.reset();
});
