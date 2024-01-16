// footer.js
fetch('footer.html')
  .then(response => response.ok ? response.text() : Promise.reject('El archivo HTML del footer no se encontr�.'))
  .then(footerData => document.getElementById('footerContainer').innerHTML = footerData)
  .catch(error => console.error(error.message));