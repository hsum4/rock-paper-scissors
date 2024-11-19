//scores
let userScore = 0;
let computerScore = 0;

//choices
const choices = ["rock", "paper", "scissors"];
const winConditions = [2, 0, 1];

//selectors for html elements
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const userChoiceLabel = document.querySelector("#userChoiceLabel");
const computerChoiceLabel = document.querySelector("#computerChoiceLabel");
const outcomeLabel = document.querySelector("#outcomeLabel");
const scoreLabel = document.querySelector("#scoreLabel");

//event listeners for buttons
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

    userChoiceLabel.textContent = `You pick: ${choices[userChoice]}`;
    computerChoiceLabel.textContent = `Computer picks: ${choices[computerChoice]}`;

    if (userChoice === computerChoice) {
        outcomeLabel.textContent = "Draw";
    }
    else if (winConditions[userChoice] === computerChoice) {
        userScore++;
        outcomeLabel.textContent = "User wins";
    }
    else {
        computerScore++;
        outcomeLabel.textContent = "Computer wins";
    }  
   scoreLabel.textContent = `User: ${userScore}\tComputer: ${computerScore}`;
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