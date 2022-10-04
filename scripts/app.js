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
  
  elem.addEventListener("keypress", (e) => {
    e.preventDefault();
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
  
  elem.addEventListener("keypress", (e) => {
    e.preventDefault();
  });
});

reset.addEventListener("click", () => {
  clear.reset();
  initial = false;
});

reset.addEventListener("keypress", e => {
  e.preventDefault();
});

del.addEventListener("click", () => {
  initialDef = clear.def();
  initial = !initialDef;
});

del.addEventListener("keypress", e => {
  e.preventDefault();
});

calculate.addEventListener("click", () => {
  printScreen.operate();
});

window.addEventListener("keypress", (e) => {
  validatePrintNumber(e.key);
  validateSymbols(e.key);
  if (e.key === "Enter") {
    printScreen.operate();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    initialDef = clear.def();
    initial = !initialDef;
  }
});

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const validatePrintNumber = (key) => {
  const number = numbers.find((n) => n === parseFloat(key));

  if (number === undefined || isNaN(number) || number === null) return;

  if (initial === false) {
    clear.initial();
    printScreen.print(number);

    initial = true;
  } else {
    printScreen.print(number);
  }
};

const symbols = ["+", "-", "*", "/"];
const validateSymbols = (key) => {
  const symbol = symbols.find((sym) => sym === key);

  if (symbol === undefined || symbol === null) return;

  if (initial === false) {
    printScreen.print(symbol);

    initial = true;
  } else {
    if (printScreen.validationOperate()) {
      printScreen.print(symbol);
    } else {
      console.log("hola");
    }
  }
};
