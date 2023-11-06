const input = document.querySelector('#name');
const name = input.value;

// Redireccionar a la página index con el nombre del usuario
window.location.href = 'index.html?name=' + name;