// header.js
fetch('header/header.html')
  .then(response => response.ok ? response.text() : Promise.reject('El archivo HTML del footer no se encontró.'))
  .then(footerData => document.getElementById('footerContainer').innerHTML = footerData)
  .catch(error => console.error(error.message));