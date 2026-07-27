function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?", "Choice")
}

function getComputerChoice() {
    let comChoice = Math.floor(Math.random() * 3 + 1); 
    
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

let humScore = 0;
let comScore = 0;

console.log(getHumanChoice());

console.log(getComputerChoice());