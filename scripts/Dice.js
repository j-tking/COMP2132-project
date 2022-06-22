// Defining a Dice OBJECT

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
