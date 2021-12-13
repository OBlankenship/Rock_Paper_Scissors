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

function playRound () {
    let userInput = getInput();
    let computerInput = computerPlay();
    if (userInput === "PAPER" && computerInput === "ROCK") {
        return "PLAYER"
    }
    if (userInput === "PAPER" && computerInput === "SCISSORS") {
        return "COMPUTER"
    }
    if (userInput === "SCISSORS" && computerInput === "PAPER") {
        return "PLAYER"
    }
    if (userInput === "SCISSORS" && computerInput === "ROCK") {
        return "COMPUTER"
    }
    if (userInput === "ROCK" && computerInput === "PAPER") {
        return "COMPUTER"
    }
    if (userInput === "ROCK" && computerInput === "SCISSORS") {
        return "PLAYER"
    }

    return "TIE"
}

function playGame() {
    let playerScore = 0
    let computerScore = 0
    while (playerScore < 5 && computerScore < 5) {
        winner = playRound()
        if (winner === "PLAYER") {
            window.alert("Winner: Player")
            playerScore += 1
            window.alert(`Player: ${playerScore} Computer: ${computerScore}`)
            
        }
        else if (winner === "COMPUTER") {
            window.alert("Winner: Computer")
            computerScore += 1
            window.alert(`Player: ${playerScore} Computer: ${computerScore}`)
            
        }
        else {
            window.alert("Tie! Try again!")
        }
    }

    if (playerScore > computerScore) {
        window.alert("Game Winner: Player")
    }
    else {
        window.alert("Game Winner: Computer")
    }
}

playGame()