/*ROLLDICE */
let ROUND = 0

const rollDice = document.getElementById('rollDice')
const ROUND1 = document.getElementById('ROUND1')
const ROUND2 = document.getElementById('ROUND2')

const rolldice = () => {
  ROUND++
  ROUND1.textContent = ROUND
  ROUND2.textContent = ROUND
}

rollDice.addEventListener('click', rolldice)

/*HOLD*/
let GLOBAL = 0

const hold = document.getElementById('hold')
const GLOBAL1 = document.getElementById('GLOBAL1')
const GLOBAL2 = document.getElementById('GLOBAL2')

const Hold = () => {
  GLOBAL++
  GLOBAL1.textContent = ROUND
  GLOBAL2.textContent = ROUND
}

hold.addEventListener('click', Hold)