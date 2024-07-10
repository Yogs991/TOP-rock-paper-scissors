function getComputeChoice(){
    let compChoice=["rock","paper","scissors"];
    let randomizeChoice=Math.floor(Math.random()*compChoice.length)+1

    if(randomizeChoice === 1){
        return "rock";
    }
    if(randomizeChoice === 2){
        return "paper";
    }
    if(randomizeChoice === 3){
        return "scissors";
    }

}

// console.log(getComputeChoice());

function getHumanChoice(){
    let humanChoice = prompt("Please choose:","");
    if( humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        return humanChoice;
    }else{
        return "Wrong choice. Please choose one of the following: rock, paper, scissors."
    }
        
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;