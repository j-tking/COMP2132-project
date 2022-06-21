const player        =   document.getElementById("player")  
const rollDice      =   document.getElementById("roll")
const newGame       =   document.getElementById("new-game")
const rollScore     =   document.getElementById("roll-score")
const scoreBoard    =   document.getElementById("scoreboard")
const rulesButton   =   document.getElementById("rules-button")
const rules         =   document.getElementById("rules")

rules.style.display = "none";

let player01            =   new Player("Jeremy");
let dice01              =   new Dice();
let dice02              =   new Dice();
let playerScore         =   new Scoreboard();
scoreBoard.innerHTML    =   playerScore.describeSelf();

// dice01.roll();
// dice02.roll();
// player01.assignDice(dice01)
// player01.assignDice(dice02)


// player.innerHTML    =    player01.describeSelf()

rollDice.addEventListener("click", function(){  
    dice01.roll();
    dice02.roll();
    player01.assignDice(dice01)
    player01.assignDice(dice02)
    player01.calculateScore();
    playerScore.updateScore( player01.totalScore );
    
    
    scoreBoard.innerHTML    = playerScore.describeSelf();
    player.innerHTML        = player01.describeSelf();
    player01.removDice()
});


rulesButton.addEventListener("click", function(){
    if( rules.style.display === "none") {
        rules.style.display = "block";
    }else{
        rules.style.display = "none";
    }
});
