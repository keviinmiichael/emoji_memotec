const form = document.forms.welcome
const label = document.querySelector('.omrs-input-filled')
const span = document.querySelector('.omrs-input-helper')
const baseUrl = window.location.origin;

// Redireccionar a la página index con el nombre del usuario
// window.location.href = 'index.html?name=' + userName;


form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const input = document.querySelector('#name')
  const userName = input.value.trim();

  if(userName.length === 0){
    label.classList.add('error')
    span.innerHTML = 'Please compelte your name'
    return false;
  }

  window.location.href = `${baseUrl}/game.html?name=${encodeURIComponent(userName)}`



})


