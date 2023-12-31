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
        alert("You drew!");
        round(prompt(), getComputerChoice());
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
    for (let i = 0; i < 5; i++) {
        const winner = round(prompt(), getComputerChoice());
        if (winner === 'player') {
            playerPoints++;
            console.log(playerPoints);
            console.log(computerPoints);
        } else {
            computerPoints++;
            console.log(playerPoints);
            console.log(computerPoints);
        }
    }
    if (playerPoints > computerPoints) {
        console.log("You win the game!!!");
    } else {
        console.log("You have lost the game!")
    }
}

game()