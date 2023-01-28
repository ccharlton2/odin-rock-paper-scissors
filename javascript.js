const choiceButtons = document.querySelectorAll('.choice')
let gameData = {playerScore: 0, computerScore: 0, draws: 0, roundsPlayed: 0};

choiceButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // handle result from playRound
        game(playRound(e));
    });
})

const resultsDiv = document.querySelector('.results');
const resultParagraph = document.createElement('p');
const playerScoreParagraph = document.querySelector('.player-score');
const computerScoreParagraph = document.querySelector('.computer-score');
const drawScoreParagraph = document.querySelector('.draw-score');

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

    if (isValidPlayerChoice(playerSelection) === 'Valid') {

        const computerSelection = getComputerChoice();

        if (playerSelection === computerSelection) {
            resultParagraph.textContent = `You both chose ${playerSelection}, draw!`;
            resultsDiv.appendChild(resultParagraph);
            return {result: 'draw', playerChoice: playerSelection, computerChoice: computerSelection};
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            resultParagraph.textContent = `You chose ${playerSelection} which beats ${computerSelection}, you win!`;
            resultsDiv.appendChild(resultParagraph);
            return {result: 'win', playerChoice: playerSelection, computerChoice: computerSelection};
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            resultParagraph.textContent = `You chose ${playerSelection} which beats ${computerSelection}, you win!`;
            resultsDiv.appendChild(resultParagraph);
            return {result: 'win', playerChoice: playerSelection, computerChoice: computerSelection};
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            resultParagraph.textContent = `You chose ${playerSelection} which beats ${computerSelection}, you win!`;
            resultsDiv.appendChild(resultParagraph);
            return {result: 'win', playerChoice: playerSelection, computerChoice: computerSelection};
        }
        else {
            resultParagraph.textContent = `Computer chose ${computerSelection} which beats ${playerSelection}, you lose!`;
            resultsDiv.appendChild(resultParagraph);
            return {result: 'loss', playerChoice: playerSelection, computerChoice: computerSelection};
        }
    }
    else {
        console.log('Error, yo!')
    }
}

function game(results) {
    
    if (gameData.roundsPlayed === 5) {
        resultsDiv.textContent = `Game Over!`;
    }

    gameData.roundsPlayed++;

    if (results.result === 'win') {
        gameData.playerScore += 1;
        playerScoreParagraph.textContent = gameData.playerScore;
    }
    else if (results.result === 'loss') {
        gameData.computerScore += 1;
        computerScoreParagraph.textContent = gameData.computerScore;
    }
    else {
        gameData.draws += 1;
        drawScoreParagraph.textContent = gameData.draws;
    } 
}

// game();