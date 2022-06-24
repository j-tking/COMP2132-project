const playButton        =   document.getElementById("play-button")
// const gameStartPop      =   document.getElementById("game-start")
const player            =   document.getElementById("player")  
const plyrScoreBoard    =   document.getElementById("plyr-scoreboard")
const opponent          =   document.getElementById("opponent")
const oppScoreBoard     =   document.getElementById("opp-scoreboard")
const rollDice          =   document.getElementById("roll")
const newGame           =   document.getElementById("new-game")
const resultsPop        =   document.getElementById("results-popup")


const $gameStartPop         =   $("#game-start");
$gameStartPop.hide();
$gameStartPop.fadeIn("slow", "linear")

resultsPop.style.opacity    =   "0";
let opacityValue            =   0;
let resultsPopHandler;

function fadeIn(){
    opacityValue = opacityValue + .05;
    if(opacityValue <= 1){
        resultsPop.style.opacity    = opacityValue;
        requestAnimationFrame( fadeIn );
    }else{
        resultsPop.style.opacity    = 1;
    }    
}

// Construct two Dice Objects to be rolled
let dice01                  =   new Dice(1);
let dice02                  =   new Dice(1);

// Construct Player object, Player Scoreboard and display them
let player01                =   new Player();
let playerScore             =   new Scoreboard();
player01.assignDice(dice01);
player01.assignDice(dice02);

plyrScoreBoard.innerHTML    =   playerScore.describeSelf();

// Construct Opponent object, Opponent Scoreboard and display them
let opponent01              =   new Player();
let opponentScore           =   new Scoreboard();
opponent01.assignDice(dice01);
opponent01.assignDice(dice02);

oppScoreBoard.innerHTML     =   opponentScore.describeSelf();

// General game layout starts here with the playButton
playButton.addEventListener("click", function(e){
    let plyrName                =   document.getElementById("name")
    let plyrNamePlaceHolder     =   document.getElementsByName("name")

    if( plyrName.value.length === 0){
        plyrName.style.backgroundColor = "#faaeaa"
        plyrName.style.border   = "solid 2px yellow"
        plyrNamePlaceHolder[0].placeholder  = "Your name is missing!!"
        e.preventDefault();

    }else{ 
        player01.name               =   plyrName.value
        player.innerHTML            =   player01.describeSelf();
        player01.removDice();
    
        opponent01.name             =   "The Bot"
        opponent.innerHTML          =   opponent01.describeSelf();
        opponent01.removDice();
    
        $gameStartPop.fadeOut("slow", "linear");}
});

let rollCount               =   0;

// Game play runs here with the rollDice button
rollDice.addEventListener("click", function(){  

    if ( rollCount === 2 ){
        resultsPopHandler = requestAnimationFrame( fadeIn );
        rollDice.style.pointerEvents = "none"
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

    console.log(resultsPop)
    var thisGameResults     = new Results(player01.totalScore, opponent01.totalScore);
    console.log(thisGameResults)
    resultsPop.innerHTML    = thisGameResults.gameResults(fadeIn);
    console.log(resultsPop)
});

// using jQuery .slideToggle() for the show/hide rules
const $showRulesButton      =   $("#rules-button")
$(".rules").hide();

$showRulesButton.click(function(){
    $(".rules").slideToggle(300);
});
