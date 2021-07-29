/*RANDOM*/
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*ROLLDICE */
var ROUND = entierAleatoire(1, 6);

let rollDice = document.getElementById('rollDice')
let ROUND1 = document.getElementById('ROUND1')
let ROUND2 = document.getElementById('ROUND2')

var ROUND1MEMORI= 0

const rolldice = () => {
    if (ROUND == 1){
        ROUND1.textContent = 0
        ROUND2.textContent = 0
    } else{
        var ROUND = entierAleatoire(1, 6);
        ROUND1.textContent = ROUND
        ROUND2.textContent = ROUND
        ROUND1MEMORI= ROUND
    }
}

rollDice.addEventListener('click', rolldice)

/*HOLD*/

let DEFAULT1=0
let GLOBAL1=0
let DEFAULT2=0
let GLOBAL2=0

let hold = document.getElementById('hold')
let GLOBAL1 = document.getElementById('GLOBAL1')
let GLOBAL2 = document.getElementById('GLOBAL2')

const Hold = () => {
    if (PLAYERTURN == 1){
        
        if (DEFAULT1 >= 100){
            alert('Victoir du joueur 1 !');
              } else{
                let GLOBAL1= (DEFAULT1+ROUND1MEMORI)
                GLOBAL1.textContent = GLOBAL1
                DEFAULT1= GLOBAL1
                displayPlayerTurn1.style.display= "none"
                displayPlayerTurn2.style.display= "block"
          PLAYERTURN= 2
        }
    } else{
        if (DEFAULT2 >= 100){
            alert('Victoir du joueur 2 !');
              } else{
                let GLOBAL2= (DEFAULT2+ROUND1MEMORI)
                GLOBAL2.textContent = GLOBAL2
                DEFAULT2= GLOBAL2
              }
        displayPlayerTurn1.style.display= "block"
        displayPlayerTurn2.style.display= "none"
        PLAYERTURN= 1
    }
}

hold.addEventListener('click', Hold)

/**PLAYER TURN*/
let displayPlayerTurn1= document.getElementById('displayPlayerTurn1')
let displayPlayerTurn2= document.getElementById('displayPlayerTurn2')
let PLAYERTURN= 1

const playerTurn = () => {
    if (PLAYERTURN == 1){
        displayPlayerTurn1.style.display= "none"
        displayPlayerTurn2.style.display= "block"
        PLAYERTURN= 2
    } else{
        displayPlayerTurn1.style.display= "block"
        displayPlayerTurn2.style.display= "none"
        PLAYERTURN= 1
    }
}

/*TEST*/

let test1= 4
let test2= 5
let result= test1 + test2

let test= document.getElementById('TEST')

const Test = () => {
 test.textContent= result
}

test.addEventListener('click', playerTurn)