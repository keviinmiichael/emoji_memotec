class Buffer {
  constructor() {
    this.firstPosition = null;
    this.secondPosition = null;
  }

  receiveElement(element) {
    if (this.firstPosition === null) {
      this.firstPosition = element;
    } else if (this.secondPosition === null && this.firstPosition.id !== element.id) {
      this.secondPosition = element;
    } else {
      return false; // Ambas posiciones están ocupadas o se esta queriendo guardar el mismo elemento dos veces
    }
    return true; // Elemento almacenado exitosamente
  }

  somePositionEmpy(){
    return this.firstPosition === null || this.secondPosition === null;
  }

  match(){
    this.firstPosition.classList.add("turned");
    this.secondPosition.classList.add("turned");
  }

  rejected(){
    this.firstPosition.classList.remove("flipped");
    this.secondPosition.classList.remove("flipped");
  }

  clearBuffer() {
    this.firstPosition = null;
    this.secondPosition = null;
  }

  comparePositions() {
    if (this.firstPosition === null || this.secondPosition === null){
      return false; // Al menos una posición está vacía
    }
    return this.firstPosition.querySelector(".back").innerHTML === this.secondPosition.querySelector(".back").innerHTML;
  }
}

export default Buffer;