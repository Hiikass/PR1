const password = document.querySelector('#password');
document.querySelector('#toggle').addEventListener('change', (e) => {
  password.type = e.target.checked ? 'text' : 'password';
});
