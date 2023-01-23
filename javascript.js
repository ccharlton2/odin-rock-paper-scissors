// return a random integer between a specified minimum and maximum (range)
function getRandomInt(min, max) {
    return Math.floor((Math.random() * (max - min) + min))
}

// sanitize string
function cleanString(text) {
    return text.trim().toLowerCase()
}

// validate user input
function isValidPlayerChoice(choice) {
    if (Number.isInteger(parseInt(choice))) {
        return "Invalid: input cannot be a number!"
    }

    switch (choice) {
        case "rock":
        case "paper":
        case "scissors":
            return "Valid"; 
        default:
            return "Invalid";
    }
}

// converts an integer into a string value
function getComputerChoice() {
    let randomInt = getRandomInt(1, 4);
    let choice = function (number) {
        switch (number) {
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors";
        }
    }
    return choice(randomInt)
}

function getPlayerChoice() {
    let choice = "";

    while ((choice === "") || !(isValidPlayerChoice(choice) === "Valid")) {
        choice = cleanString(prompt("Enter your choice!"));
    }
    
    return choice;
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player choice: ${playerSelection}`)
    console.log(`Comp choice: ${computerSelection}`)

    if (playerSelection === computerSelection) {
        console.log(`You both chose ${playerSelection}, draw!`)
        return 'draw';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`${playerSelection} beats ${computerSelection}, you win!`)
        return 'win';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`${playerSelection} beats ${computerSelection}, you win!`)
        return 'win';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`${playerSelection} beats ${computerSelection}, you win!`)
        return 'win';
    }
    else {
        console.log(`${computerSelection} beats ${playerSelection}, you lose!`)
        return 'loss';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    let roundResult = '';

    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {

        roundResult = playRound(getPlayerChoice(), getComputerChoice());

        if (roundResult === 'win') {
            playerScore += 1;
        }
        else if (roundResult === 'loss') {
            computerScore += 1;
        }
        else {
            draws += 1;
        } 
    }

    if (playerScore > computerScore) {
        console.log('You win!')
    }
    else {
        console.log('You lose!')
    }

    console.log(`wins: ${playerScore}, losses: ${computerScore}, draws: ${draws}`)
}

game();