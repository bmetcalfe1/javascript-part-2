//Create a constructor function called `Warrior` that can create new warriors. 
//This function will take parameters `name`, and `gender`. 
// `name` can be any string, `gender` can be `M` or `F`. 
// It should create a warrior that has these properties:
//     `name`: the value that was passed to the constructor
//     * `gender`: the value that was passed to the constructor
//     * `level`: 1
//     * `weapon`: wooden sword
//     * `power`: a random number between 1 and 100
//   * In addition to that, every object that gets created should have the following methods:
//     * `fight`: will output to the console: "<name> rushes to the arena with <his/her> <weapon>"
//     * `faceoff`: faceoff takes one argument called `opponent`. 
// Based on the `power` of each opponent, 
// this method should output to the console which player won the fight based on their power. 
// Be as creative as you like with the text of this method :)
//   * Finally, create a bunch of warriors and make them fight together.

function Warrior(name, gender, level) {
    this.name = name;
    
    if (gender === "M"){
        this.gender = "M";
    }
    else if (gender === "F"){
        this.gender = "F";
    }
    else {
        console.log("the only valid inputs are M and F");
    }
    
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.random() * 100;
}

Warrior.prototype = {
    
    fight: function() {
        console.log(this.name + " rushes in the arena with their " + this.weapon);
    },
    faceoff: function(opponent) {
        if (this.power > opponent.power){
            console.log(this.name + " wins");
        }
        else if (this.power < opponent.power){
            console.log(this.name + " loses");
        }
        else {
            console.log("tie!");
        }
    }
    
};

var brendan = new Warrior ("Brendan", "M");
var codrin = new Warrior ("Codrin", "F");

brendan.fight();
codrin.fight();
brendan.faceoff(codrin);



