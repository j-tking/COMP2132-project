// Defining a Dice OBJECT

// Dice object has a value, function roll() which assigns a random value between #1-6, and function describeSelf() for viewing images of the dice to repersent the value of the Dice object

class Dice{
    constructor( value ){
        this.value = value;
    }
    roll(){
        this.value = Math.floor(Math.random() * 6) + 1;
        return this.value    
    }
    describeSelf(){
        return `<img class="img-contain" src="./images/dice-${this.value}.jpg" alt="dice number is ${this.value}"> `
    }
}
