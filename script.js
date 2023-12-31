function getComputerChoice() {
    const rng = Math.floor(Math.random() * 3);
    switch (rng) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("You drew!");
        return 'tie';
    }   else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("You lose! Paper beats rock.");
        return 'computer';
    }   else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win! Rock beats scissors.");
        return 'player';
    }   else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win! Paper beats rock.");
        return 'player';
    }   else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("You lose! Scissors beat paper.");
        return 'computer';
    }   else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("You lose! Rock beats scissors.");
        return 'computer';
    }   else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win! Scissors beat paper.")
        return 'player';
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5;) {
        const winner = round(prompt("Rock, paper, scissors."), getComputerChoice());
        if (winner === 'player') {
            playerPoints++;
            i++
        } else if (winner === 'computer'){
            computerPoints++;
            i++
        }
        console.log("Player: " + playerPoints);
        console.log("Computer: " + computerPoints);
    }
    if (playerPoints > computerPoints) {
        console.log("You win the game!!!");
    } else {
        console.log("You have lost the game!")
    }
}

game()