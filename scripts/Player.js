// Player OBJECT 

class Player{
    constructor( name ){
        this.name = name;
        this.dice = [];
        this.score = [];
    }
    assignDice( dice ){
        if( dice instanceof Dice ){
            this.dice.push( dice )
            this.score.push( dice.value )
        };
    }
    calculateScore(){
        var score = 0;
        for (let i = 0; i < this.score.length; i++){
            score += this.score[i];
        }return score
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