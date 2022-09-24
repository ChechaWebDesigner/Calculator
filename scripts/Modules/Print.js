export class Print {
  screen = document.getElementById("screen-answer");

  constructor() {}

  print(value) {
    this.screen.innerHTML += value;
  }

  getText() {
    return this.screen.innerText;
  }

  convertToArray() {
    return this.getText().split("");
  }

  validationOperate() {
    const elementos = this.convertToArray();
    const validation = elementos[elementos.length - 1];
    if (
      validation === "+" ||
      validation === "-" ||
      validation === "*" ||
      validation === "/"
    ) {
      return false;
    } else {
      return true;
    }
  }

  operate() {
    const elementos = this.convertToArray();
    const validation = elementos[elementos.length - 1];
    if (
      validation === "+" ||
      validation === "-" ||
      validation === "*" ||
      validation === "/"
    ) {
      alert("Operación no valida");
    } else {
      this.screen.innerHTML = eval(this.screen.innerText);
    }
  }
}
