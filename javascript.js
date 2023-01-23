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
    let choice = prompt("Enter your choice!");
    
    return choice;
}