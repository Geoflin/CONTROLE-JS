/*RANDOM*/
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 6
var entier = entierAleatoire(1, 6);
/*ROLLDICE */
var ROUND = 0
let rollDice = document.getElementById('rollDice')
let ROUND1 = document.getElementById('ROUND1')
let ROUND2 = document.getElementById('ROUND2')
let IntRound1 = ROUND1
var ROUND1MEMORI= 0
const rolldice = () => {
  var ROUND = entierAleatoire(1, 6);
  ROUND1.textContent = ROUND
  ROUND2.textContent = ROUND
  ROUND1MEMORI= ROUND
}
rollDice.addEventListener('click', rolldice)
/*HOLD*/
let DEFAULT=0
let GLOBAL=0
let hold = document.getElementById('hold')
let GLOBAL1 = document.getElementById('GLOBAL1')
let GLOBAL2 = document.getElementById('GLOBAL2')
const Hold = () => {
  if (DEFAULT >= 100){
    alert('WIN');
      } else{
        let GLOBAL= (DEFAULT+ROUND1MEMORI)
        GLOBAL1.textContent = GLOBAL
        GLOBAL2.textContent = GLOBAL
        DEFAULT= GLOBAL
      }
}

hold.addEventListener('click', Hold)

/*NEW GAME*/
let newGame= document.getElementById('newGame')

const newgame = () => {

  }

  newGame.addEventListener('click', newgame)


/*TEST*/
let test1= 4
let test2= 5
let result= test1 + test2
let test= document.getElementById('TEST')
const Test = () => {
 test.textContent= result
}
test.addEventListener('click',Test)