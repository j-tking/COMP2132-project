const player            =   document.getElementById("player")  
const plyrScoreBoard    =   document.getElementById("plyr-scoreboard")
const opponent          =   document.getElementById("opponent")
const oppScoreBoard     =   document.getElementById("opp-scoreboard")
const rollDice          =   document.getElementById("roll")
const newGame           =   document.getElementById("new-game")
const resultsPop        =   document.getElementById("results-popup")

resultsPop.style.opacity    =   "0"
let opacityValue            =   0;
let resultsPopHandler;

function fadeIn(){
    opacityValue = opacityValue + .05;
    if(opacityValue <= 1){
        resultsPop.style.opacity = opacityValue;
        requestAnimationFrame( fadeIn );
    }else{
        resultsPop.style.opacity = 1;
    }    
}

// Construct Player object, Player Scoreboard and display them
let player01                =   new Player("Jeremy");
let playerScore             =   new Scoreboard();
plyrScoreBoard.innerHTML    =   playerScore.describeSelf();

// Construct Opponent object, Opponent Scoreboard and display them
let opponent01              =   new Player("The Bot");
let opponentScore           =   new Scoreboard();
oppScoreBoard.innerHTML     =   opponentScore.describeSelf();

// Construct two Dice Objects to be rolled
let dice01                  =   new Dice();
let dice02                  =   new Dice();

let rollCount               =   0;

rollDice.addEventListener("click", function(){  

    if ( rollCount === 2 ){
        resultsPopHandler = requestAnimationFrame( fadeIn );

    }

    dice01.roll();
    dice02.roll();
    player01.assignDice(dice01)
    player01.assignDice(dice02)
    player01.calculateRollScore();
    player01.calculateTotalScore( player01.rollScore );
    playerScore.updateRollScore( player01.rollScore );
    playerScore.updateTotalScore( player01.totalScore )
    
    player.innerHTML            = player01.describeSelf();
    plyrScoreBoard.innerHTML    = playerScore.describeSelf();

    player01.removDice();

    dice01.roll();
    dice02.roll();
    opponent01.assignDice(dice01)
    opponent01.assignDice(dice02)
    opponent01.calculateRollScore();
    opponent01.calculateTotalScore( opponent01.rollScore );
    opponentScore.updateRollScore( opponent01.rollScore );
    opponentScore.updateTotalScore( opponent01.totalScore )

    opponent.innerHTML      =   opponent01.describeSelf();
    oppScoreBoard.innerHTML =   opponentScore.describeSelf();

    opponent01.removDice();

    rollCount ++;

    var thisGameResults     = new Results(player01.totalScore, opponent01.totalScore);
    resultsPop.innerHTML    = thisGameResults.gameResults(fadeIn);
});


const rulesButton       =   document.getElementById("rules-button")
const rules             =   document.getElementById("rules")

rules.style.display = "none";

rulesButton.addEventListener("click", function(){
    if( rules.style.display === "none") {
        rules.style.display = "block";
    }else{
        rules.style.display = "none";
    }
});
