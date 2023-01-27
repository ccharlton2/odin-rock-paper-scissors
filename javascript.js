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

function playRound(e) {
    const playerSelection = e.target.textContent.toLowerCase();
    let computerSelection = '';

    if (isValidPlayerChoice(playerSelection) === 'Valid') {

        computerSelection = getComputerChoice();

        if (playerSelection === computerSelection) {
            console.log(`You both chose ${playerSelection}, draw!`)
            return 'draw';
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log(`You chose ${playerSelection} which beats ${computerSelection}, you win!`)
            return 'win';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log(`You chose ${playerSelection} which beats ${computerSelection}, you win!`)
            return 'win';
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log(`You chose ${playerSelection} which beats ${computerSelection}, you win!`)
            return 'win';
        }
        else {
            console.log(`Computer chose ${computerSelection} which beats ${playerSelection}, you lose!`)
            return 'loss';
        }
    }
    else {
        console.log('Error, yo!')
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    let roundResult = '';

    for (let roundsPlayed = 0; roundsPlayed < 5 && playerScore < 3 && computerScore < 3; roundsPlayed++) {

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

const choiceButtons = document.querySelectorAll('.choice')
choiceButtons.forEach((button) => {
    button.addEventListener('click', playRound);
})

// game();