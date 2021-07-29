/*ROLLDICE */
var ROUND = entierAleatoire(1, 6);

const rollDice = document.getElementById('rollDice')
const ROUND1 = document.getElementById('ROUND1')
const ROUND2 = document.getElementById('ROUND2')

const rolldice = () => {
  var ROUND = entierAleatoire(1, 6);
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
  GLOBAL1.textContent = ROUND1.textContent
  GLOBAL2.textContent = ROUND2.textContent
}

hold.addEventListener('click', Hold)

/*RANDOM*/
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 6
var entier = entierAleatoire(1, 6);