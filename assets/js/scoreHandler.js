import Buffer from "./buffer.js";

const showAttemps = document.querySelector(".attempst");
const showScore = document.querySelector(".score");
let score = 0;
let attempts = 0;

const buffer = new Buffer();

const solveDifference = () =>{
  setTimeout(() => {
    buffer.rejected();
    attempts++;
    showAttemps.innerHTML = `Attempts: ${attempts}`
    buffer.clearBuffer();
  }, 1000);
}

const solveCoincidence = () =>{
  buffer.match();
  score++;
  attempts++;
  showScore.innerHTML = `Score: ${score}`
  showAttemps.innerHTML = `Attempts: ${attempts}`
  buffer.clearBuffer();
}

const gameFinished = () =>{
  return score === 8;
}

const showResults = () =>{
  const modal = document.querySelector("#finishModal")
  const msg = document.querySelector(".msg")
  if (gameFinished()) {
    msg.innerHTML = `Has achieved ${score} correct answers out of ${attempts} attempts.`
    modal.classList.remove("off")
    modal.classList.add("on")
  }
}


export const turn = (e) => {
  const currentCard = e.currentTarget;

  if (!buffer.receiveElement(currentCard) || currentCard.className.includes("turned")) {
    return false;
  } else {
    currentCard.classList.add("flipped");
  }


  if (!buffer.somePositionEmpy()) {
    if (!buffer.comparePositions()) {
      solveDifference();
    }else{
      solveCoincidence();
      showResults();
    }
  }

}
