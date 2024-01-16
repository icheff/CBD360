// header.js
fetch('header/header.html')
  .then(response => response.ok ? response.text() : Promise.reject('not found'))
  .then(headerData => document.getElementById('headerContainer').innerHTML = headerData)
  .catch(error => console.error(error.message));