// Player OBJECT 

class Player{
    constructor( name ){
        this.name = name;
        this.dice = [];
    }
    assignDice( dice ){
        if( dice instanceof Dice ){
            this.dice.push( dice )
        };
    }
    removDice(){
        this.dice = [];
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