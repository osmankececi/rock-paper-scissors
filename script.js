
function computerPlay() {
    return Math.floor(Math.random() * 3) +1; 
}

function computerChoice() {
    if (computerPlay() === 1) {
        return "rock";
    } else if (computerPlay() === 2) {
        return "raper";
    } else {
        return "scissors";
    }
}




const playerSelectionRandomCase = window.prompt("Please write your selection (rock / paper / scissors");
const playerSelection = playerSelectionRandomCase.toLowerCase();
const computerSelection = computerChoice();
         
    function playRound(playerSelection, computerSelection) {
        if ( computerSelection === playerSelection ) {
            return "It's a tie. No winner.";
        } else if ( (computerSelection === "rock") && (playerSelection === "paper") ) {
            return "Player Wins. Paper beats Rock!";
        } else if ( (computerSelection === "rock") && (playerSelection === "scissors") ) {
            return "Computer Wins. Rock beats Scissors!";
        } else if ( (computerSelection === "scissors") && (playerSelection === "paper") ) {
            return "Computer Wins. Scissors beats Paper!";
        } else if ( (computerSelection === "scissors") && (playerSelection === "rock") ) {
            return "Player Wins. Rock beats Scissors!";
        } else if ( (computerSelection === "paper") && (playerSelection === "scissors") ) {
            return "Player Wins. Scissors beats Paper!";
        } else if ( (computerSelection === "paper") && (playerSelection === "rock") ) {
            return "Computer Wins. Paper beats Rock!";
        }
    }

    
    console.log(playRound(playerSelection, computerSelection));

    















