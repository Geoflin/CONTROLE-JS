/*RANDOM*/
function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**PLAYER TURN*/
let displayPlayerTurn1 = document.getElementById('displayPlayerTurn1')
let displayPlayerTurn2 = document.getElementById('displayPlayerTurn2')
let PLAYERTURN = 1

/*ROLLDICE */
var ROUND11 = 0
var ROUND21 = 0

let rollDice = document.getElementById('rollDice')
let ROUND1 = document.getElementById('ROUND1')
let ROUND2 = document.getElementById('ROUND2')
let IntRound1 = ROUND1
var ROUND1MEMORI = 0
var ROUND2MEMORI = 0

const rolldice = () => {
    var ROUND11 = entierAleatoire(1, 6);
    var ROUND21 = entierAleatoire(1, 6);
    if (PLAYERTURN == 1 && ROUND11 == 1) {
        ROUND1.textContent = 0
        ROUND1MEMORI = 0
        PLAYERTURN = 2
        displayPlayerTurn1.style.display = "none"
        displayPlayerTurn2.style.display = "block"
        alert('Le Joueur 1 a fait 1 donc il perd son tour')
    } else if (PLAYERTURN == 1) {
        ROUND1.textContent = ROUND11
        ROUND1MEMORI = ROUND11
    } else if (PLAYERTURN == 2 && ROUND21 == 1) {
        ROUND2.textContent = 0
        ROUND2MEMORI = 0
        PLAYERTURN = 1
        displayPlayerTurn1.style.display = "block"
        displayPlayerTurn2.style.display = "none"
        alert('Le Joueur 2 a fait 1 donc il perd son tour')
    } else if (PLAYERTURN == 2) {
        ROUND2.textContent = ROUND21
        ROUND2MEMORI = ROUND21
    } else {
        alert('error');
    }
}

rollDice.addEventListener('click', rolldice)

/*HOLD*/

let DEFAULT1 = 0
let GLOBAL11 = 0
let DEFAULT2 = 0
let GLOBAL21 = 0

let hold = document.getElementById('hold')
let GLOBAL1 = document.getElementById('GLOBAL1')
let GLOBAL2 = document.getElementById('GLOBAL2')

const Hold = () => {
    if (PLAYERTURN == 1 && DEFAULT1 >= 100) {
        alert('Victoir du joueur 1 !');
    } else if (PLAYERTURN == 1 && ROUND1.textContent == 0 && ROUND11 !== 1) {
        alert("Joueur 1 n'a pas lancé son dés !")
    } else if (PLAYERTURN == 1) {
        let GLOBAL11 = (DEFAULT1 + ROUND1MEMORI)
        GLOBAL1.textContent = GLOBAL11
        DEFAULT1 = GLOBAL11
        displayPlayerTurn1.style.display = "none"
        displayPlayerTurn2.style.display = "block"
        PLAYERTURN = 2
        ROUND1.textContent = 0
    } else if (PLAYERTURN == 2 && DEFAULT2 >= 100) {
        alert('Victoir du joueur 2 !');
    } else if (PLAYERTURN == 2 && ROUND2.textContent == 0 && ROUND21 !== 1) {
        alert("Joueur 2 n'a pas lancé son dés !")
    } else if (PLAYERTURN == 2) {
        let GLOBAL21 = (DEFAULT2 + ROUND2MEMORI)
        GLOBAL2.textContent = GLOBAL21
        DEFAULT2 = GLOBAL21
        displayPlayerTurn1.style.display = "block"
        displayPlayerTurn2.style.display = "none"
        PLAYERTURN = 1
        ROUND2.textContent = 0
    }else {
        alert('error');
    }
}

hold.addEventListener('click', Hold)

/*TEST*/

let test1 = 4
let test2 = 5
let result = test1 + test2

let test = document.getElementById('TEST')

const Test = () => {
    test.textContent = result
}

test.addEventListener('click', Test)