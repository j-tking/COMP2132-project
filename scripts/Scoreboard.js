// Scoreboard OBJECT

class Scoreboard{
    constructor(){
        this.playerRoll     =   0;
        this.playerTotal    =   0;
        this.opponentRoll   =   0;
        this.opponentTotal  =   0;
    }
    updateRollScore( value ){
        this.playerRoll     =   value
        return this.playerRoll
    }
    updateTotalScore( value ){
        this.playerTotal    = value
        return this.playerTotal
    }
    describeSelf(){
        let score  = " "

        score      =   `<h4>Scoreboard</h4>`
        score      +=  `<p>This Roll: ${this.playerRoll}</p>`
        score      +=  `<p>Total: ${this.playerTotal}</p>`
        return score
    }
}