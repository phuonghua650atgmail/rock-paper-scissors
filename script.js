// //console.log('console.log: ' + 'test external js file to index.html');
// // let playerSelection = playerSelection.toLowerCase();
// // let computerSelection = computerSelection.toLowerCase();
// //console.log('console.log ' + randomNumberChoice);
// //return 'return ' + randomNumberChoice;
// // for (let i = 0; i <= 100; i++) {
// //     console.log(i);
// // }
// // GAME
// let sign = prompt("sign?");
// if (sign.toLowerCase() == "scorpio") {
//     alert("me too");
//     console.log("me too")
// } else {
//     greeting = `${sign} + is an awesome sign`;
//   }

function computerPlay () {
    let randomNumberChoice = Math.floor(Math.random() * 3); // this ranges from 0 to 2. not 1 to 3. this is why i labeled the cases accordingly
    switch (randomNumberChoice) {
        case 0: 
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors'; 
            break;
        default: 
            console.log('looks like you reach the default case. i am not sure how you would get to default.');
        }
    }

let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playerRound (playerSelection, computerSelection) {    
    if (playerSelection === computerSelection) {
        return roundWinner = 'draw';
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
            return playerScore++;
            console.log(playerScore)
            return roundWinner = 'player';
        }
    if  ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) {
            return computerScore++;
            console.log(computerScore)
            return roundWinner = 'computer';
        }
    }       

function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }

// // UI

// const scoreInfo = document.getElementById('scoreInfo')
// const playerScorePara = document.getElementById('playerScore')
// const computerScorePara = document.getElementById('computerScore')
// const playerSign = document.getElementById('playerSign')
// const computerSign = document.getElementById('computerSign')
// const rockBtn = document.getElementById('rockBtn')
// const paperBtn = document.getElementById('paperBtn')
// const scissorsBtn = document.getElementById('scissorsBtn')
// const endgameModal = document.getElementById('endgameModal')
// const endgameMsg = document.getElementById('endgameMsg')
// const overlay = document.getElementById('overlay')
// const restartBtn = document.getElementById('restartBtn')

// rockBtn.addEventListener('click', () => handleClick('ROCK'))
// paperBtn.addEventListener('click', () => handleClick('PAPER'))
// scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))
// restartBtn.addEventListener('click', restartGame)
// overlay.addEventListener('click', closeEndgameModal)

// function handleClick(playerSelection) {
//   if (isGameOver()) {
//     openEndgameModal()
//     return
//   }

//   const computerSelection = getRandomChoice()
//   playRound(playerSelection, computerSelection)
//   updateChoices(playerSelection, computerSelection)
//   updateScore()

//   if (isGameOver()) {
//     openEndgameModal()
//     setFinalMessage()
//   }
// }

// function updateChoices(playerSelection, computerSelection) {
//   const playerSignClassName = `fa-hand-${playerSelection.toLowerCase()}`
//   const computerSignClassName = `fa-hand-${computerSelection.toLowerCase()}`

//   playerSign.classList = `fas ${playerSignClassName} active`
//   computerSign.classList = `fas ${computerSignClassName} active`
// }

// function updateScore() {
//   if (roundWinner === 'tie') {
//     scoreInfo.textContent = "It's a tie!"
//   } else if (roundWinner === 'player') {
//     scoreInfo.textContent = 'You won!'
//   } else if (roundWinner === 'computer') {
//     scoreInfo.textContent = 'You lost!'
//   }

//   playerScorePara.textContent = `Player: ${playerScore}`
//   computerScorePara.textContent = `Computer: ${computerScore}`
// }

// function openEndgameModal() {
//   endgameModal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeEndgameModal() {
//   endgameModal.classList.remove('active')
//   overlay.classList.remove('active')
// }

// function setFinalMessage() {
//   return playerScore > computerScore
//     ? (endgameMsg.textContent = 'You won 😀')
//     : (endgameMsg.textContent = 'You lost 🙁')
// }

// function restartGame() {
//   playerScore = 0
//   computerScore = 0
//   scoreInfo.textContent = 'Score'
//   playerScorePara.textContent = 'Player: 0'
//   computerScorePara.textContent = 'Computer: 0'
//   playerSign.classList.remove('active')
//   computerSign.classList.remove('active')
//   endgameModal.classList.remove('active')
//   overlay.classList.remove('active')
// }