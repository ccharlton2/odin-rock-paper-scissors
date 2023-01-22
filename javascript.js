// return a random integer between a specified minimum and maximum (range)
function getRandomInt(min, max) {
    return Math.floor((Math.random() * (max - min) + min))
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