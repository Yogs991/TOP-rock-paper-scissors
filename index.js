const rockButton = document.querySelector('#btn-rock');
const paperButton = document.querySelector('#btn-paper');
const scissorsButton = document.querySelector('#btn-scissors');
const resultDisplay = document.querySelector('#result');

rockButton.addEventListener('click',()=>playRound('rock'));
paperButton.addEventListener('click',()=>playRound('paper'));
scissorsButton.addEventListener('click',()=>playRound('scissors'));

let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
let totalRounds = 5;
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const roundDisplay = document.querySelector("#round");

function playRound(playerChoice){
    if(currentRound <= totalRounds){
        roundDisplay.textContent = `Round: ${currentRound} of ${totalRounds}`;
        currentRound++;
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
    if(currentRound>totalRounds){
        endGame();
    }
}

function endGame(){
    const container = document.querySelector('#rps');
    const choices = document.querySelector("#choice");
    const gameInfo = document.querySelector("#game-info");
    const roundRes = document.querySelector("#result");
    if(choices){
        choices.style.display = "none";
    }
    if(gameInfo){
        gameInfo.style.display = "none";
    }
    if(roundRes){
        roundRes.style.display = "none";
    }

    const gameConclusion = document.createElement("div");
    gameConclusion.setAttribute('id', 'game-conclusion');

    let finalMessage = '';
    if(playerScore>computerScore){
        finalMessage = `You win! ${playerScore} to ${computerScore}`
    }else if(computerScore>playerScore){
        finalMessage = `You lose! ${playerScore} to ${computerScore}`
    }else{
        finalMessage = `It's a draw! ${playerScore} to ${computerScore}`
    }

    gameConclusion.innerHTML = `
    <h2>Game Over</h2>
    <p>${finalMessage}</p>
    <p>Score - You: ${playerScore} - Computer: ${computerScore}</p>
    <button id="restart-btn">Restart Game</button>`

    container.appendChild(gameConclusion);
    document.getElementById("restart-btn").addEventListener('click', restartGame);

    function restartGame(){
        playerScore = 0;
        computerScore = 0;
        currentRound = 1;
        playerScoreDisplay.textContent = "Player Score : 0";
        computerScoreDisplay.textContent = "Computer Score : 0";
        roundDisplay.textContent = `Round : 1 of ${totalRounds}`;
        if (choices){
            choices.style.display = "";
        }
        if (gameInfo){
            gameInfo.style.display = "";
        }
        if (roundRes){
            roundRes.style.display = "";
        }
        const gameConclusion = document.querySelector("#game-conclusion");
        resultDisplay.textContent = "Choose your option!";
    }
}
