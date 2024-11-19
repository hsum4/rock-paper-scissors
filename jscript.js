//scores
let userScore = 0;
let computerScore = 0;

//choices
const choices = ["rock", "paper", "scissors"];
const winConditions = [2, 0, 1];

//let rockBtn = document.querySelector("#rock") 



//functions
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getUserChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
    if (choices.includes(choice)) {
        return choices.indexOf(choice);
    }
    else {
        alert("Invalid Choice");
        return getUserChoice();
    }
}

function playRound() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        console.log(`Computer picks: ${choices[computerChoice]}`);
        console.log("Draw")
    }
    else if (winConditions[userChoice] === computerChoice) {
        userScore++;
        console.log(`Computer picks: ${choices[computerChoice]}`);
        console.log("User wins");
    }
    else {
        computerScore++;
        console.log(`Computer picks: ${choices[computerChoice]}`);
        console.log("Computer wins");
    }  
    console.log(`User: ${userScore}\tComputer: ${computerScore}`);
}

function playGame() {
    for (let i = 0; i <5; i++) {
        playRound();
    }
    if (userScore > computerScore) {
        console.log("USER WINS!");
    }
    else if (userScore === computerScore){
        console.log("IT'S A DRAW!");
    }
    else {
        console.log("COMPUTER WINS!");
    }
}