function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?", "Choice")
}

function getComputerChoice() {
    const comChoice = Math.floor(Math.random() * 3 + 1); 
    
    if (comChoice === 1) {
        return "Rock"; 
    }
    else if (comChoice === 2) {
        return "Paper"; 
    }
    else {
        return "Scissors"; 
    }
}

function playRound(humanChoice, computerChoice) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
}

let humScore = 0;
let comScore = 0;