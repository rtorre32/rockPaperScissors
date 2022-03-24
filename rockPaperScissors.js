
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
    console.log("Player: " + playerSelection);
    console.log("CMP: " + computerSelection);

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        answerBox.textContent = "Tie!";
        return "Tie!";
    }
    
    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "Paper"){
            answerBox.textContent = "You Lose! Paper beats Rock";
            // console.log("You Lose! Paper beats Rock");
            return "computer";
        }
        else{
            answerBox.textContent = "You Win! Rock beats Scissors";
            // console.log("You Win! Rock beats Scissors");
            return "human";
        }
    }
    if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection === "Scissor"){
            // console.log("You Lose! Scissor beats Paper");
            answerBox.textContent = "You Lose! Scissor beats Paper";
            return "computer";
        }
        else{
            // console.log("You Win! Paper beats Rock");
            answerBox.textContent = "You Win! Paper beats Rock";
            return "human";
        }
    }
    if(playerSelection.toLowerCase() === "scissor"){
        if(computerSelection === "Rock"){
            // console.log("You Lose! Rock beats Scissor");
            answerBox.textContent = "You Lose! Rock beats Scissor";
            return "computer";
        }
        else{
            // console.log("You Win! Scissor beats Paper");
            answerBox.textContent = "You Win! Scissor beats Paper";
            return "human";
        }
    }
}


function game(){

    const buttons = document.querySelectorAll('button');
    
    let playerMove;
    
    buttons.forEach(button => button.addEventListener("click", () =>{
        playerMove = button.getAttribute("id");
        playRound(playerMove, computerPlay());
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



