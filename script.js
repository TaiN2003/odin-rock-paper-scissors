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
    let humScore = 0;
    let comScore = 0;
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie.")
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".")
        humScore++;
        console.log(humScore);
        console.log(comScore);
    }
    else {
        console.log(("You lose! " + computerChoice + " beats " + humanChoice + "."))
        comScore++;
        console.log(humScore);
        console.log(comScore);
    }
}

const humanInput = getHumanChoice()
const humanChoice = humanInput[0].toUpperCase() + humanInput.slice(1).toLowerCase();

const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice)