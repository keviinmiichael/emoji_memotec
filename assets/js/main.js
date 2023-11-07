import { cardCreator } from './cardsCreator.js';
import { turn, userName } from './scoreHandler.js';




if (userName.length === 0) {
  window.location.href = window.location.origin;
}

const salute = document.querySelector(".welcome")
salute.innerHTML = `Hi ${userName}`


cardCreator();

const reload = () =>{
  location.reload();
}

const cards = document.querySelectorAll(".card");
const cross = document.querySelector(".icon-button")
const modalButton = document.querySelector(".button")
const footerButton = document.querySelector(".in-footer")

for (const card of cards) {
  card.addEventListener("click", turn);
}

cross.addEventListener("click", reload)
modalButton.addEventListener("click", reload)
footerButton.addEventListener("click", reload)

