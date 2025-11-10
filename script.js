console.log("Hello, Rock Paper Scissors!");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  const choice = choices[randomNumber];
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Enter 'rock', 'paper', or 'scissors': ");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 0;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

playRound(humanSelection, computerSelection);
