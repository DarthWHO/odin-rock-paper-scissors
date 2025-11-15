function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  const choice = choices[randomNumber];
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (!isGameOver) {
    round++;
    if (humanChoice === computerChoice) {
      // DO NOTHING
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      scoreHuman++;
    } else {
      scoreComputer++;
    }

    if (scoreHuman == 5 || scoreComputer == 5) {
      if (scoreHuman == 5) {
        results.textContent = `GAME OVER!! Human Wins!<br>ROUND: ${round}: Human: ${scoreHuman} - Computer: ${scoreComputer}`;
        isGameOver = true;
        return;
      } else {
        results.textContent = `GAME OVER!! Computer Wins! ROUND: ${round}: Human: ${scoreHuman} - Computer: ${scoreComputer}`;
        isGameOver = true;
        return;
      }
    }

    results.textContent = `ROUND: ${round}: Human: ${scoreHuman} - Computer: ${scoreComputer}`;
  }
}

let scoreComputer = 0;
let scoreHuman = 0;
let round = 0;
let isGameOver = false;
const results = document.querySelector("#results");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

function handleClick(button) {
  playRound(button.id, getComputerChoice());
}

btnRock.addEventListener("click", () => handleClick(btnRock));
btnPaper.addEventListener("click", () => handleClick(btnPaper));
btnScissors.addEventListener("click", () => handleClick(btnScissors));
