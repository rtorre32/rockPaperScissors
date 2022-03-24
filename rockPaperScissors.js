
let humanScore = 0; 
let computerScore = 0;


let getRandomInt = () => Math.floor(Math.random() * 3);

function computerPlay(){
    let x = getRandomInt();
    if(x === 0){
        return "Paper";
    }
    else if(x === 1){
        return "Rock";
    }
    else{
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection){
    const answerBox = document.querySelector(".result");
    const humanScoreBox = document.querySelector(".humanScore");
    const computerScoreBox = document.querySelector(".computerScore");

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        answerBox.textContent = "Round Winner: Tie!";
        return "Tie!";
    }
    
    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "Paper"){
            answerBox.textContent = "Round Winner: You Lose! Paper beats Rock";
            computerScore++;
            computerScoreBox.textContent = "Computer: " + computerScore;  
        }
        else{
            answerBox.textContent = "Round Winner: You Win! Rock beats Scissors";  
            humanScore++;
            humanScoreBox.textContent = "Human: " + humanScore;
        }
    }
    if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection === "Scissor"){           
            answerBox.textContent = "Round Winner: You Lose! Scissor beats Paper";
            computerScore++;
            computerScoreBox.textContent = "Computer: " + computerScore;        
        }
        else{
            answerBox.textContent = "Round Winner: You Win! Paper beats Rock";
            humanScore++;
            humanScoreBox.textContent = "Human: " + humanScore;    
        }
    }
    if(playerSelection.toLowerCase() === "scissor"){
        if(computerSelection === "Rock"){  
            answerBox.textContent = "Round Winner: You Lose! Rock beats Scissor";
            computerScore++;
            computerScoreBox.textContent = "Computer: " + computerScore;
        }
        else{ 
            answerBox.textContent = "Round Winner: You Win! Scissor beats Paper";
            humanScore++;
            humanScoreBox.textContent = "Human: " + humanScore;
        }
    }
}


function game(){

    const buttons = document.querySelectorAll('button');
    const gameOverText = document.querySelector(".gameOver");
    
    let playerMove;
    
    
    buttons.forEach(button => button.addEventListener("click", () =>{
        playerMove = button.getAttribute("id");
        playRound(playerMove, computerPlay());
        if(humanScore == 5){
            gameOverText.textContent = "Game Winner: You Win!";
        }
        if(computerScore == 5){  
            gameOverText.textContent = "Game Winner: Computer wins! You Lose :(";
        }
    }));
    

    

    // let playerMove = window.prompt("What's your move?");
    // playRound(playerMove, computerPlay());

    // let points = 0;

    // for(let i = 0; i < 5; i++){
    //     let playerMove = window.prompt("What's your move?");
    //     if(playRound(playerMove, computerPlay()) == "human"){
    //         points++;
    //     }
    // }
    // if(points >= 3){
    //     console.log("You Win! " + points + "-" + (5 - points));
    // }
    // else{
    //     console.log("You Lose! " + points + "-" + (5 - points));
    // }
}

game();



