const rock = document.getElementById('rock');
const papper = document.getElementById('papper');
const scissors = document.getElementById('scissors');
const selections = ["🥔", "📃", "✂️","✂️", "✂️"];
const resultText = document.getElementById('resultado-text');
const score = document.getElementById('score');
const resultContainer = document.getElementById('resultado-container');
const restartButton = document.getElementById('restartButton')

function restartgame() {
    location.reload();
  }

rock.addEventListener('click', playGame);
papper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);
restartButton.addEventListener('click', restartgame);
let points = 200;
function playGame(event) {
    const playerSelection = event.target.textContent;
    const computerSelection = selections[Math.floor(Math.random() * 3)];
    
    if (playerSelection == computerSelection) {
        resultText.innerText = `${playerSelection} vs ${computerSelection} Empate!`;
        resultContainer.style.backgroundColor = "#FFC107";
    } else if (playerSelection == "🥔" && computerSelection == "✂️") {
        resultText.innerText = `${playerSelection} vs ${computerSelection} Ganaste!`;
        resultContainer.style.backgroundColor = "#2ecc71";
        points = points + 3;
    } else if (playerSelection == "📃" && computerSelection == "🥔") {
        resultText.innerText = `${playerSelection} vs ${computerSelection} Ganaste!`;
        resultContainer.style.backgroundColor = "#2ecc71";
        points = points + 3;
    } else if (playerSelection == "✂️" && computerSelection == "📃") {
        resultText.innerText = `${playerSelection} vs ${computerSelection} Ganaste!`;
        resultContainer.style.backgroundColor = "#2ecc71";
        points = points + 3;
    } else {
        resultText.innerText = `${playerSelection} vs ${computerSelection} Perdiste`;
        resultContainer.style.backgroundColor = "#e74c3c";
        points = points - 3;
    }
    score.innerText = `Score: ${points}`;
  }
  
  
