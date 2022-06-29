const playButton        =   document.getElementById("play-button")
const player            =   document.getElementById("player")  
const plyrScoreBoard    =   document.getElementById("plyr-scoreboard")
const opponent          =   document.getElementById("opponent")
const oppScoreBoard     =   document.getElementById("opp-scoreboard")
const rollDice          =   document.getElementById("roll")
const playAgainButton   =   document.getElementById("play-again-butt")
const resultsPop        =   document.getElementById("results-popup")

// using jQuery to fadeIn the gameStartPop display
const $gameStartPop         =   $("#game-start");
$gameStartPop.hide();
$gameStartPop.fadeIn("slow", "linear")

// using fadeIn function to fade in and out resultsPop which is the view of the game results
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

// remove pointer-events from rollDice so it cannot be clicked until the game has started
rollDice.style.pointerEvents = "none"

// ==== >  General game layout starts here using playButton and plyrName input to start the game
playButton.addEventListener("click", function(e){
    let plyrName                =   document.getElementById("name")
    let plyrNamePlaceHolder     =   document.getElementsByName("name")

    // have user enter a name for the Player in the game and do not allow them to continue without input
    if( plyrName.value.length === 0){
        plyrName.style.backgroundColor = "#faaeaa"
        plyrName.style.border   = "solid 2px yellow"
        plyrNamePlaceHolder[0].placeholder  = "Your name is missing!!"
        e.preventDefault();

    }else{ 
        player01.name               =   plyrName.value
        player.innerHTML            =   player01.describeSelf();
        player01.removDice();
        
        // opponent name is defaulted to "The Bot"
        opponent01.name             =   "The Bot"
        opponent.innerHTML          =   opponent01.describeSelf();
        opponent01.removDice();
        
        // add pointerEvents back to rollDice button for game play
        rollDice.style.pointerEvents = "all"
        $gameStartPop.fadeOut("slow", "linear");}
});

// using rollCount variable to apply the rule for the game of only 3 rolls per round
let rollCount   =   0;

// ========== >  Game play runs here with the rollDice button  < ==========
rollDice.addEventListener("click", function(){  

    // if 3 rolls have been made fade in the results of the game and don't let the rollDice button work anymore
    if ( rollCount === 2 ){
        resultsPopHandler = requestAnimationFrame( fadeIn );
        rollDice.style.pointerEvents = "none"
    }

    // each rollDice event roll 2 dice, assign 2 to the player and 2 to the opponent for display, calculate a score for this roll and calculate a total for the game using Player Object functions calculateRollScore and calculateTotalScore.  Assign the roll score and the total score to each Player object for display and tracking the game results.

    // player roll event happens here
    dice01.roll();
    dice02.roll();
    player01.assignDice(dice01)
    player01.assignDice(dice02)
    player01.calculateRollScore();
    player01.calculateTotalScore( player01.rollScore );
    playerScore.updateRollScore( player01.rollScore );
    playerScore.updateTotalScore( player01.totalScore )

    // upadate the DOM with images of the dice rolled as well as the score after each roll and total score on the scoreboard
    player.innerHTML            = player01.describeSelf();
    plyrScoreBoard.innerHTML    = playerScore.describeSelf();

    // Remove the dice after each roll 
    player01.removDice();

    // opponent roll event happens here
    dice01.roll();
    dice02.roll();
    opponent01.assignDice(dice01)
    opponent01.assignDice(dice02)
    opponent01.calculateRollScore();
    opponent01.calculateTotalScore( opponent01.rollScore );
    opponentScore.updateRollScore( opponent01.rollScore );
    opponentScore.updateTotalScore( opponent01.totalScore )
    // upadate the DOM with images of the dice rolled as well as the score after each roll
    opponent.innerHTML      =   opponent01.describeSelf();
    oppScoreBoard.innerHTML =   opponentScore.describeSelf();

    // Remove the dice after each roll 
    opponent01.removDice();

    // counting each rollDice click event to only allow 3 rolls to happen as per game rules. 
    rollCount ++;

    // After 3 rolls of the dice construct Results Object to display the results of the game.  Different results will be displayed depending on who won the game or if the game was a draw.
    var thisGameResults     = new Results(player01.totalScore, opponent01.totalScore);
 
    resultsPop.innerHTML    = thisGameResults.gameResults(fadeIn);
});

// using jQuery .slideToggle() for the show/hide rules
const $showRulesButton      =   $("#rules-button")
$(".rules").hide();

$showRulesButton.click(function(){
    $(".rules").slideToggle(300);
});

// check to make sure jQuery is turned on
const $jQueryCheck      =   $("#jq-off")
$jQueryCheck.hide();

