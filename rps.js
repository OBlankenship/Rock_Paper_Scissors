function getComputerSelection() {
    const selections = ["rock", "paper", "scissors"];
    const randomPosition = Math.floor(Math.random() * selections.length);
    return selections[randomPosition];
}

function playRound(event) {
    const content = document.getElementById("notification");
    let playerSelection = event.currentTarget.innerHTML;
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerSelection();
    let winner;

    if (playerSelection == computerSelection) {
        content.textContent = "Tie! Try again!";
        winner = "tie";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        content.textContent = "Paper beats rock! You win!";
        winner =  "player";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        content.textContent = "Scissors beats paper! You win!";
        winner =  "player";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        content.textContent = "Rock beats scissors! You win!";
        winner =  "player";
    }
    else {
        content.textContent = `${computerSelection} beats ${playerSelection}! You lose!`;
        winner =  "computer";
    }
    checkScore(winner);
    return winner;
}

let computerScore = 0;
let playerScore = 0;

function updateScores() {
    const playerScoreDisplay = document.getElementById("playerScore");
    playerScoreDisplay.textContent = playerScore;
    const computerScoreDisplay = document.getElementById("computerScore");
    computerScoreDisplay.textContent = computerScore;
}

function checkScore(winner) {
    switch(winner) {
        case "computer":
            computerScore++;;
            break;
        case "player":
            playerScore++;
            break;
        }
    updateScores()
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore > computerScore ? "Player" : "Computer";
        const content = document.getElementById("notification");
        content.textContent = `Game over! ${winner} wins!`;
    }
}

const rockButton = document.getElementById("rockButton");
rockButton.addEventListener("click", playRound);
const paperButton = document.getElementById("paperButton");
paperButton.addEventListener("click", playRound);
const scissorsButton = document.getElementById("scissorsButton");
scissorsButton.addEventListener("click", playRound);