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

        string = `<h3>${this.name}</h3>`
        
        string += `<ul class="dice-list">`
        this.dice.forEach(function( dice ){
            string += `<li>${dice.describeSelf()}</li>`
        });
        string += `</ul>`
        
        return string;
    }
}