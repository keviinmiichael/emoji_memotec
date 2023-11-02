import Buffer from "./buffer.js";

const showAttemps = document.querySelector(".attempst");
const showScore = document.querySelector(".score");

const buffer = new Buffer();
let score = 0;
let attempts = 0;

export const turn = (e) => {
  const currentCard = e.currentTarget;

  !buffer.receiveElement(currentCard)? false:currentCard.classList.add("flipped");
  

  if (!buffer.somePositionEmpy()) {
    if (!buffer.comparePositions()) {
      setTimeout(() => {
        buffer.rejected();
        attempts++;
        buffer.clearBuffer();
      }, 1000);
    }else{
      buffer.match();
      score++;
      attempts++;
      buffer.clearBuffer();
    }
  }
  

  showAttemps.innerHTML = `Attempts: ${attempts}`
  showScore.innerHTML = `Score: ${score}`

}