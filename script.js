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
    console.log(`It's a tie! Both chose ${humanChoice}.`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Human wins round!");
    return "human"
  } else {
    console.log("Computer wins round!");
    return "computer"
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  while (humanScore < 5 && computerScore < 5) {
    const roundResult = playRound(getHumanChoice(), getComputerChoice())
    if (roundResult === "human") {
      humanScore++
    } else if (roundResult === "computer") {
      computerScore++
    } else {
      continue;
    }

    console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
  }

  if (humanScore > computerScore) {
    console.log("The human wins!")
  } else {
    console.log("The computer wins!")
  }
}

playGame();
