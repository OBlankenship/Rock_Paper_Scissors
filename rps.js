function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay() {
    let randInt = getRandomInt(3)
    switch(randInt) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

