const cards = document.querySelectorAll(".card");
const emojis = ['🤡', '💩', '👻', '💀', '☠️', '🎃', '👾', '🤖']
let emojisInGame = [];

const timesElementInArray = (array, elemento) =>{
  return array.reduce((count, currentElement) => {
    if (currentElement === elemento) {
      return count + 1;
    }
    return count;
  }, 0);
}

do {
  let indexRandom = Math.floor(Math.random() * emojis.length)
  let emojiRandom = emojis[indexRandom];
  if (timesElementInArray(emojisInGame, emojiRandom) < 2) {
    emojisInGame.push(emojiRandom)
  } 
}while (emojisInGame.length < 16);

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i].childNodes[1].childNodes[3].innerHTML);
  cards[i].childNodes[1].childNodes[3].innerHTML = emojisInGame[i]

}


const showAttemps = document.querySelector(".attempst")
const showScore = document.querySelector(".score")

let score = 0;
let attempts = 0;
let countFlip = 0;
let fliped1 = null;
let fliped2 = null;

const reveal = (e) => {
  const currentCard = e.currentTarget;
  

  if(!fliped1){
    fliped1 = currentCard
  }else if (fliped1 && !fliped2) {
    fliped2 = currentCard
  }

  if (fliped1 && fliped2){
    attempts++
    if (fliped1.childNodes[1].childNodes[3].innerHTML === fliped2.childNodes[1].childNodes[3].innerHTML) {
      score++
      fliped1.classList.add("turned");
      fliped2.classList.add("turned");
      fliped1 = null;
      fliped2 = null;
    }else{
      setTimeout(() => {
        fliped1.classList.remove("flipped");
        fliped2.classList.remove("flipped");
        countFlip = 0;
        fliped1 = null;
        fliped2 = null;
      }, 1000);
      
    }
  }

  if (countFlip > 2) {
    console.log("HAY MAS DE 2 CARTAS DADAS VUELTA");
    // TODO: COMO DETENER EL EVENTO DE QUE LA CARTA SE DE VUELTA SI YA HAY 2 SIENDO EVALUADAS
    // TODO: si hay una carta fliped, y falta clickear la segunda, el miss click en una carta turned no debe contar como click
    // TODO: Un listener que cuando esten todas dadas vueltas se transforme el contenido en el puntaje final y mensaje de felicidades
    // e.addEventListener("click", (event) => {
    //   return;
    // });
  }

  cards.forEach(element => {
    if(element.className.includes("flipped")){
      countFlip++;
    }
  });
  
  currentCard.classList.add("flipped");
  

  showAttemps.innerHTML = `Attempts: ${attempts}`
  showScore.innerHTML = `Score: ${score}`



  
};

for (const card of cards) {
  card.addEventListener("click", reveal);
}



