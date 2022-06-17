const player        =   document.getElementById("player")  
const rollDice      =   document.getElementById("roll")
const newGame       =   document.getElementById("new-game")
const rollScore     =   document.getElementById("roll-score")

// const plyrDice01    =   document.getElementById("plyr-dice-1")
// const plyrDice02    =   document.getElementById("plyr-dice-2")


const player01      =   new Player("Jeremy");
let dice01          =   new Dice();
let dice02          =   new Dice();

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
    rollScore.innerHTML =   `<p>This Roll: ${player01.calculateScore()}</p>`
    player.innerHTML    =   player01.describeSelf();
    player01.removDice()
});



// newGame.addEventListener("click", function(){
//     player.innerHTML    =   " "
// });