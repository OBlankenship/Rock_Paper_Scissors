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
    if (userInput === "PAPER" && computerInput === "ROCK") {
        window.alert("You selected paper, and the computer selected rock!")
        return "PLAYER"
    }
    if (userInput === "PAPER" && computerInput === "SCISSORS") {
        window.alert("You selected paper, and the computer selected scissors!")
        return "COMPUTER"
    }
    if (userInput === "SCISSORS" && computerInput === "PAPER") {
        window.alert("You selected scissors, and the computer selected paper!")
        return "PLAYER"
    }
    if (userInput === "SCISSORS" && computerInput === "ROCK") {
        window.alert("You selected scissors, and the computer selected rock!")
        return "COMPUTER"
    }
    if (userInput === "ROCK" && computerInput === "PAPER") {
        window.alert("You selected rock, and the computer selected paper!")
        return "COMPUTER"
    }
    if (userInput === "ROCK" && computerInput === "SCISSORS") {
        window.alert("You selected rock, and the computer selected scissors!")
        return "PLAYER"
    }

    return "TIE"
}

let playerScore = 0
let computerScore = 0

function keepScore(winner) {
    if (winner === "PLAYER") {
        window.alert("Winner: Player")
        playerScore += 1
        playerWin();
        window.alert(`Player: ${playerScore} Computer: ${computerScore}`)
        
    }
    else if (winner === "COMPUTER") {
        window.alert("Winner: Computer")
        computerScore += 1
        computerWin();
        window.alert(`Player: ${playerScore} Computer: ${computerScore}`)
    }
    else {
        window.alert("Tie! Try again!")

    }
    if (playerScore === 5) {
        window.alert("Game Winner: Player")
    }
    if (computerScore === 5) {
        window.alert("Game Winner: Computer")
    }
}

function computerWin() {
    let computerDiv = document.getElementById("computerDiv")
    let content = document.getElementById("computerScore")
    content.textContent = `${computerScore}`;
}

function playerWin() {
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