import { cardCreator } from './cardsCreator.js';
import { turn } from './scoreHandler.js';

cardCreator();

const cards = document.querySelectorAll(".card");


for (const card of cards) {
  card.addEventListener("click", turn);
}



