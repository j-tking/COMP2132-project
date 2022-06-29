// Object to display game results

class Results{
    constructor(plyrTotal, oppTotal){
        this.plyrTotal  =   plyrTotal
        this.oppTotal   =   oppTotal
    }
    gameResults(){
        let output  = ``
        output      = `<h3>Game Results</h3>`

        if( this.plyrTotal > this.oppTotal){
            output += `<p> Congratulations!!!  You won!!</p>`
            output += `<p> You won by ${this.plyrTotal - this.oppTotal} point(s)!!</p>`
        }
        else if (this.plyrTotal === this.oppTotal){
            output += `<p> The game was a draw!!</p>`
            output += `<p> Nobody won....</p>`
        }else{
            output += `<p class="lost"> Sorry, you lost by ${this.oppTotal - this.plyrTotal} point(s).....</p>`
        }
        output += `<button onclick="window.location.reload();">Play Again?</button>`
        return output
    }
}