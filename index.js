const rockButton = document.querySelector('#btn-rock');
const paperButton = document.querySelector('#btn-paper');
const scissorsButton = document.querySelector('#btn-scissors');
const resultDisplay = document.querySelector('#result');

rockButton.addEventListener('click',()=>playRound('rock'));
paperButton.addEventListener('click',()=>playRound('paper'));
scissorsButton.addEventListener('click',()=>playRound('scissors'));

function playRound(playerChoice){
    const choices = ["rock","paper","scissors"];
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];

    if(playerChoice===computerChoice){
        resultDisplay.textContent = "it's a draw";
    }else if(
        (playerChoice==="rock" && computerChoice==="scissors") ||
        (playerChoice==="paper" && computerChoice==="rock") ||
        (playerChoice==="scissors" && computerChoice==="paper")
    ){
        resultDisplay.textContent = "You win!";
        playerScore++;
    }else{
        resultDisplay.textContent = "Computer lose!";
        computerScore++;
    }

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
