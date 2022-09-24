const buttonTheme = document.getElementById("btnTheme");

let position = 1;

buttonTheme.addEventListener("click", () => {
  if (position === 0) {
    buttonTheme.style.justifyContent = "flex-start";
    document.body.classList.remove("third-mode");
    document.body.classList.add("initial-mode");
    position++;
  } else if (position === 1) {
    buttonTheme.style.justifyContent = "center";
    document.body.classList.remove("initial-mode");
    document.body.classList.add("second-mode");
    position++;
  } else {
    buttonTheme.style.justifyContent = "flex-end";
    document.body.classList.remove("second-mode");
    document.body.classList.add("third-mode");
    position=0;
  }
});
