"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //game logic
  if (!guess) {
    //cuando no ingresan un número
    displayMessage("🛑 No number!");
  } else if (guess === secretNumber) {
    //cuando gana
    displayMessage("🎉 Correct number!");
    document.querySelector(".number").textContent = secretNumber;

    //cambio el estilo
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //evaluo el score
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    //cuando el numero es más alto
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;

      //cambio el estilo
      document.querySelector("body").style.backgroundColor = "#ae1313";
      document.querySelector(".number").style.width = "30rem";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //seteo las variables
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  //seteo los mensajes y valores de elementos
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  //seteo el css
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
