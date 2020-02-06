function prepListeners() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.addEventListener('click', playRound));
}

prepListeners();

function computerPlay() {
    let random = Math.random() * 3;
    return random < 1 ? "rock"
        : random < 2 ? "paper"
            : "scissors";
}

function playRound(e) {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.removeEventListener('click', playRound));
    removeComputerChoice();
    let computerChoice = computerPlay();
    removeComputerChoiceTimeout = setTimeout(function () { animateComputerChoice(computerChoice); }, 250);
    setTimeout(function () { buttons.forEach(button => button.addEventListener('click', playRound)); }, 250);
    playerInput = e.target.id;
    (playerInput == computerChoice) ? game('Draw.')
    : (playerInput == 'rock' && computerChoice == 'paper') ? game('Computer Wins! Computer played paper.')
    : (playerInput == 'rock' && computerChoice == 'scissors') ? game('You Win! Computer played scissors.')
    : (playerInput == 'paper' && computerChoice == 'rock') ? game('You Win! Computer played rock.')
    : (playerInput == 'paper' && computerChoice == 'scissors') ? game('Computer Wins! Computer played scissors.')
    : (playerInput == 'scissors' && computerChoice == 'rock') ? game('Computer Wins! Computer played rock.')
    : game('You Win! Computer played paper.')
}

function removeComputerChoice() {
    rockArrow = document.querySelector('#comp-rock');
    choiceText = document.querySelector('.choice-announce')
    choiceText.style.opacity = '0';
    rockArrow.style.opacity = '0';
    paperArrow = document.querySelector('#comp-paper');
    paperArrow.style.opacity = '0';
    scissorsArrow = document.querySelector('#comp-scissors');
    scissorsArrow.style.opacity = '0';
}

function animateComputerChoice(choice) {
    choiceText = document.querySelector('.choice-announce')
    choiceText.style.opacity = '1';
    if (choice == "rock") {
        rockArrow = document.querySelector('#comp-rock');
        rockArrow.style.opacity = '1';
    }
    else if (choice == "paper") {
        paperArrow = document.querySelector('#comp-paper');
        paperArrow.style.opacity = '1';
    }
    else {
        scissorsArrow = document.querySelector('#comp-scissors');
        scissorsArrow.style.opacity = '1';
    }
}

function game(winnerMessage) {
    const announce = document.querySelector('#announcement');
    const playerHTML = document.querySelector('#you');
    const computerHTML = document.querySelector('#computer');
    if (winnerMessage.includes('Computer Wins!')) {
        compScore++;
        announce.innerHTML = winnerMessage;
        computerHTML.innerHTML = `Computer: ${compScore}`;
        if (compScore == 5) {
            clearTimeout(removeComputerChoiceTimeout);
            compScore = 0;
            playerScore = 0;
            announce.innerHTML = "Computer won the series. Play again?";
            computerHTML.innerHTML = `Computer: ${compScore}`;
            playerHTML.innerHTML = `You: ${playerScore}`;
        }
    }
    else if (winnerMessage.includes('You Win!')) {
        playerScore++;
        announce.innerHTML = winnerMessage;
        playerHTML.innerHTML = `You: ${playerScore}`;
        if (playerScore == 5) {
            clearTimeout(removeComputerChoiceTimeout);
            compScore = 0;
            playerScore = 0;
            announce.innerHTML = "You won the series. Play again?";
            computerHTML.innerHTML = `Computer: ${compScore}`;
            playerHTML.innerHTML = `You: ${playerScore}`;
        }
    }
    else { announce.innerHTML = winnerMessage; }
}

let compScore = 0;
let playerScore = 0;
let removeComputerChoiceTimeout;