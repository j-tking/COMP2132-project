// Defining a Dice OBJECT

class Dice{
    constructor( value ){
        this.value = value;
    }
    describeSelf(){
        return `<img class="img-contain" src="./images/dice-${this.value}.jpg" alt="dice number is ${this.value}"> `
    }
}

// function for Dice to be rolled and assign a random value between 1 & 6
Dice.prototype.roll = function(){

    this.value = Math.floor(Math.random() * 6) + 1;
    return this.value    
}