function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay() {
    let randInt = getRandomInt(3)
    switch(randInt) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function getInput () {
    let userInput = ""
    while (true) {
        userInput = window.prompt("Please enter rock, paper, or scissors: ");
        userInput = userInput.toUpperCase();
        if (userInput === "ROCK" || userInput === "SCISSORS" || userInput === "PAPER") {
            break
        }
        window.alert("Invalid input!")
    }
    return userInput
    
}

function playRound (userInput) {
    let computerInput = computerPlay();
    let content = document.getElementById("notification")
    if (userInput === "PAPER" && computerInput === "ROCK") {
        content.textContent = "You selected paper, and the computer selected rock!";
        return "PLAYER"
    }
    if (userInput === "PAPER" && computerInput === "SCISSORS") {
        content.textContent = "You selected paper, and the computer selected scissors!";
        return "COMPUTER"
    }
    if (userInput === "SCISSORS" && computerInput === "PAPER") {
        content.textContent = "You selected scissors, and the computer selected paper!"
        return "PLAYER"
    }
    if (userInput === "SCISSORS" && computerInput === "ROCK") {
        content.textContent = "You selected scissors, and the computer selected rock!"
        return "COMPUTER"
    }
    if (userInput === "ROCK" && computerInput === "PAPER") {
        content.textContent = "You selected rock, and the computer selected paper!"
        return "COMPUTER"
    }
    if (userInput === "ROCK" && computerInput === "SCISSORS") {
        content.textContent = "You selected rock, and the computer selected scissors!"
        return "PLAYER"
    }
    content.textContent = "Tie! Try again!"
    return "TIE"
}

let playerScore = 0
let computerScore = 0

function keepScore(winner) {
    if (winner === "PLAYER") {
        playerWin();
        
    }
    else if (winner === "COMPUTER") {
        computerWin();
    }

    if (playerScore === 5) {
        window.alert("Game Winner: Player")
    }
    if (computerScore === 5) {
        window.alert("Game Winner: Computer")
    }
}

function computerWin() {
    computerScore += 1
    let computerDiv = document.getElementById("computerDiv")
    let content = document.getElementById("computerScore")
    content.textContent = `${computerScore}`;
}

function playerWin() {
    playerScore += 1
    let playerDiv = document.getElementById("playerDiv")
    let content = document.getElementById("playerScore")
    content.textContent = `${playerScore}`;
}

function clickRock() {
    winner = playRound("ROCK")
    keepScore(winner)
}

function clickPaper() {
    winner = playRound("PAPER")
    keepScore(winner)
}

function clickScissors() {
    winner = playRound("SCISSORS")
    keepScore(winner)
}

let btnRock = document.getElementById("ROCK")
btnRock.addEventListener('click', clickRock)

let btnPaper = document.getElementById("PAPER")
btnPaper.addEventListener('click', clickPaper)

let btnScissors = document.getElementById("SCISSORS")
btnScissors.addEventListener('click', clickScissors)