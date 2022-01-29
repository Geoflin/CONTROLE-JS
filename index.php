<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>mini-jeux Dual-dice !</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
  </head>
  <body>
    <aside>
    <div class="center"><i class="material-icons">account_circle</i><a href="https://cvmarhoffergeoffrey.herokuapp.com/" target="_blank">Codeur: Geoffrey</a></div>

      <span class="buttonRule">
        <i class="material-icons">gavel</i>Règles du mini-jeux<i class="material-icons" id="rules1">expand_more</i><i class="material-icons" id="rules2">chevron_right</i>
      </span>
      <span id="rule">
        <h1>Voici les règles:</h1>
        <ul>
          <li>2 joueurs s'affrontent sur un seul et même écran</li>
          <li>À chaque tour:</li>
          <ul>
            <li>-le joueur actif:</li>
            <ol>
              <li>lance son dès (en cliquant sur "ROLL DICE")</li>
              <li>choisit:</li>
              <ul>
                <li>soit de sauvegarder le résulat de son dès et de passer son tour (en cliquant sur "HOLD")</li>
                <li>soit de relancer son dès (en cliquant sur "ROLL DICE")</li>
              </ul>
            </ol>
          </ul>
        </ul>
          
        <h1>ATTENTION ! </h1>
          <p>Si un joueur obtient un 1:</p>
          <li>le joueur perd son tour !</li>
        
        <h1>Condition de victoire:</h1>
          <li>Le premier joueur qui cumule 100 points gagne.</li>
    
      </span>
      
    </aside>

      <header id="header">
      <h1 id="newGame"><i class="material-icons">add_circle_outline</i> NEW GAME</h1> 
    </header>
    <main>
      <section class="PLAYER1">
        <span>
          <div class="playerName">PLAYER 1<i class="material-icons" id="displayPlayerTurn1">radio_button_checked</i></div>
        <div class="ROUND" id="ROUND1">0</div>
        </span>
        <span>
          <div class="GLOBAL">Current</div>
          <div class="GLOBAL" id="GLOBAL1">0</div>
        </span>
      </section>

      <section class="CENTERCOLONNE">

        <span>
        <div class="dice"><i class="material-icons">casino</i></div>
        </span>

        <span>
        <section class="rollDice" id="rollDice">
          <div><i class="material-icons">autorenew</i>ROLLDICE</div>
        </section>
        <section class="hold" id="hold">
          <div><i class="material-icons">file_download</i>HOLD</div>
        </section>
      </span>

      </section>

      <section class="PLAYER2">
        <span>
          <div class="playerName">PLAYER 2<i class="material-icons" id="displayPlayerTurn2">radio_button_checked</i></div>
        <div class="ROUND" id="ROUND2">0</div>
        </span>
        <span>
          <div class="GLOBAL">Current</div>
          <div class="GLOBAL" id="GLOBAL2">0</div>
        </span class="row2"></br></br>
      </section>


    </main>
    <script src="script.js"></script>
   
				
  </body>
</html>