// Player OBJECT 

class Player{
    constructor( name ){
        this.name           = name;
        this.dice           = [];
        this.score          = [];
        this.totalScore     =   0;
    }
    assignDice( dice ){
        if( dice instanceof Dice ){
            this.dice.push( dice )
            this.score.push( dice.value )
        };
    }
    calculateScore(){
        for (let i = 0; i < this.score.length; i++){
            this.totalScore += this.score[i];
        }return this.totalScore
    }
    removDice(){
        this.dice = [];
        this.score = [];
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