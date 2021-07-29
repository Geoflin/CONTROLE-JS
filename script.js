let playerScore = 0

const rollDice = document.getElementById('rollDice')
const playerscore1 = document.getElementById('playerScore1')
const playerscore2 = document.getElementById('playerScore2')

const rolldice = () => {
  playerScore++
  playerscore1.textContent = playerScore
  playerscore2.textContent = playerScore
}

rollDice.addEventListener('click', rolldice)