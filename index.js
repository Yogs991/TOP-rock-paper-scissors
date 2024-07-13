function getComputerChoice(){
    let compChoice = ["rock","paper","scissors"];
    let compChoices = Math.floor(Math.random()*compChoice.length)+1;
    if(compChoices===1){
        return "rock";
    }
    if (compChoices===2) {
        return "paper";
    }
    if (compChoices===3) {
        return "scissors";
    }
}

function getHumanChoice(){
    let playerChoice=prompt("enter rock or paper or scissors").toLowerCase();
    return playerChoice;
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Player wins");
        return "human";
    } else {
        console.log("Computer wins");
        return "computer";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log("Player choice: " + humanSelection);
        console.log("Computer choice: " + computerSelection);
        let result = playRound(humanSelection, computerSelection);
        if (result === "human") {
            humanScore ++;
        }else if (result === "computer") {
            computerScore++;
        }
    }
    console.log("Score is " + "Human: " + humanScore + " -Computer: " + computerScore );

    if(humanScore > computerScore){
        console.log("You win");
    }else if (computerScore>humanScore) {
        console.log("Computer win");
    }else{
        console.log("It's a tie");
    }
}



playGame();






