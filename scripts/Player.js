// Player OBJECT 

class Player{
    constructor( name ){
        this.name           = name;
        this.dice           = [];
        this.score          = [];
        this.rollScore      =   0;
        this.totalScore     =   0;
    }
    assignDice( dice ){
        if( dice instanceof Dice ){
            this.dice.push( dice )
            this.score.push( dice.value )
        };
    }
    calculateRollScore(){
        for (let i = 0; i < this.score.length; i ++){
            if( this.score[i] === 1){
                this.rollScore = 0
                break
            }else{
                this.rollScore += this.score[i]
            }
        }return this.rollScore
    }
    calculateTotalScore( rollscore ){
        this.totalScore += rollscore
        return this.totalScore
    }
    
    removDice(){
        this.dice       = [];
        this.score      = [];
        this.rollScore  = 0;
    }
    describeSelf(){
        let string  =   ``

        string = `<h3>Player: ${this.name}</h3>`
        
        string += `<ul>`
        this.dice.forEach(function( dice ){
            string += `<li>${dice.describeSelf()}</li>`
        });
        string += `</ul>`
        
        return string;
    }
}