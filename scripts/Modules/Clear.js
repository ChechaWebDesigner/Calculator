import { Print } from "./Print.js";

export class Clear extends Print {
  screen = document.getElementById("screen-answer");

  constructor() {
    super()
  }

  initial() {
    this.screen.innerHTML = "";
  }

  reset() {
    this.screen.innerHTML = 0;
  }

  def() {
    if (super.convertToArray().slice(0, -1).length === 0) {
      this.screen.innerHTML = 0;
      return true;
    } else {
      this.screen.innerHTML = super.convertToArray()
        .slice(0, -1)
        .toString()
        .replace(/,/g, "");
      return false;
    }
  }
}
