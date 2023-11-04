export const cardCreator = () => {
  const divGame = document.querySelector(".game")
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

  for (let i = 0; i < emojisInGame.length; i++) {

    let section = document.createElement("section");
    section.className = "card";
    section.id = i;

    let contentDiv = document.createElement("div");
    contentDiv.className = "content";

    let frontDiv = document.createElement("div");
    frontDiv.className = "front";
    frontDiv.innerHTML = "👽";

    let backDiv = document.createElement("div");
    backDiv.className = "back";
    backDiv.innerHTML = emojisInGame[i];

    contentDiv.appendChild(frontDiv);
    contentDiv.appendChild(backDiv);
    section.appendChild(contentDiv);
    divGame.appendChild(section);

  }
}

