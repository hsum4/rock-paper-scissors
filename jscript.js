//scores
let userScore = 0;
let computerScore = 0;

//choices
const choices = ["rock", "paper", "scissors"];
const winConditions = [2, 0, 1];

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => playRound(rockBtn));
paperBtn.addEventListener("click", () => playRound(paperBtn));
scissorsBtn.addEventListener("click", () => playRound(scissorsBtn));


//functions
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getUserChoice(btn) {
    let choice = btn.value;
    if (choices.includes(choice)) {
        return choices.indexOf(choice);
    }
    else {
        alert("Invalid Choice");
        return getUserChoice();
    }
}

function playRound(btn) {
    let userChoice = getUserChoice(btn);
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