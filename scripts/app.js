import { Print } from "./Modules/Print.js";
import { Clear } from "./Modules/Clear.js";

const nodeButtons = document.querySelectorAll(".btnOperate");
const nodeOperates = document.querySelectorAll(".btnTypeOperation");
const reset = document.getElementById("reset");
const del = document.getElementById("del");
const calculate = document.getElementById("calculate");

let initial = false;
let initialDef = false;

const buttons = Array.from(nodeButtons);
const operates = Array.from(nodeOperates);

const printScreen = new Print();
const clear = new Clear();

buttons.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (initial === false) {
      clear.initial();
      printScreen.print(elem.value);

      initial = true;
    } else {
      printScreen.print(elem.value);
    }
  });
});

operates.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (initial === false) {
      printScreen.print(elem.value);

      initial = true;
    } else {
      if (printScreen.validationOperate()) {
        printScreen.print(elem.value);
      } else {
        console.log("hola");
      }
    }
  });
});

reset.addEventListener("click", () => {
  clear.reset();
  initial = false;
});

del.addEventListener("click", () => {
  initialDef = clear.def();
  initial = !initialDef;
});

calculate.addEventListener("click", () => {
  printScreen.operate();
});
