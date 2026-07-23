function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}


function getHumanChoice() {
  const choice = prompt("Rock, Paper, or Scissors?");
  return choice.toLowerCase()
}



function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("You tied!");
      return
    }
  
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
      } else {
        console.log("You win! Rock beats scissors.")
        humanScore++;;
      }
    }
    else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats rock.")
        humanScore++;
      } else {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
      }
    }
    else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
      } else {
        console.log("You win! Scissors beats paper.");
        humanScore++;
      }
    }
  }

  for (let i = 0; i < 2; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(`You won the game! Your score: ${humanScore}, Computer score: ${computerScore}.`);
  } else if (humanScore < computerScore) {
    console.log(`You lost the game! Your score: ${humanScore}, Computer score: ${computerScore}.`);
  } else {
     console.log(`You tied the game! Your score: ${humanScore}, Computer score: ${computerScore}.`);
  }
}

playGame();