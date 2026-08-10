let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    results.textContent = `You tied!`
    score.textContent = `Score: ${humanScore} - ${computerScore}`;
    return
  }

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      results.textContent = `You lose! Paper beats rock.`
      score.textContent = `Score: ${humanScore} - ${computerScore}`;
    } else {
      humanScore++;
      results.textContent = `You win! Rock beats scissors.`
      score.textContent = `Score: ${humanScore} - ${computerScore}`;
    }
  }
  else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      results.textContent = `You win! Paper beats rock.`
      score.textContent = `Score: ${humanScore} - ${computerScore}`;
    } else {
      computerScore++;
      results.textContent = `You lose! Scissors beats paper.`
      score.textContent = `Score: ${humanScore} - ${computerScore}`;
    }
  }
  else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      results.textContent = `You lose! Rock beats scissors.`
      score.textContent = `Score: ${humanScore} - ${computerScore}`;
    } else {
      humanScore++;
      results.textContent = `You win! Scissors beats paper.`
      score.textContent = `Score: ${humanScore} - ${computerScore}`;
    }
  }

  if (humanScore === 5) {
    alert(`Congrats! You won the game!`);
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }

  if (computerScore === 5) {
    alert(`Sorry! The computer won the game!`);
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}






const results = document.querySelector("#results");
const score = document.querySelector("#score");

const rock = document.querySelector("#rockBtn");
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice())
});

const paper = document.querySelector("#papBtn");
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice())
});

const scissors = document.querySelector("#sciBtn");
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice())
});


