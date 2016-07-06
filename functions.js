// Read about the Array.prototype.sort method. 
// Create a function that can be used with sort. 
// This function should take two strings, 
//and return a value that sort can use to determine which is the longest string. 
// Finally, create an array of strings and try to get it sorted using your new function.
var myArray = ["dude", "bro", "yo"];

function compare (str1, str2) {
  
    var strOneLength = str1.length;
    var strTwoLength = str2.length;
  
        if (strOneLength < strTwoLength) {
            return -1;
        }
        else if (strOneLength > strTwoLength) {
            return 1;
        }
        else {
            return 0;
        }
    }
    
var sortedArray = myArray.sort(compare);

//console.log(sortedArray);

//Create an array of objects 
// (don’t need to use new here, just regular object literals). 
//These objects will contain a name and email property. 
//Then, run some code that will sort your array by the longest name. 
//Then, run some code that will sort your array by e-mail address in alphabetical order.

var person1 = {name:"Brendan", email:"brendan@email.com"};
var person2 = {name:"Sean", email:"sean@email.com"};
var person3 = {name:"Chris", email:"chris@email.com"};

var objArray = [person1, person2, person3];

function potato(person1, person2) {
  
    var pOneNameLength = person1.name.length;
    var pTwoNameLength = person2.name.length;
  
        if (pOneNameLength < pTwoNameLength) {
            return 1;
        }
        else if (pOneNameLength > pTwoNameLength) {
            return -1;
        }
        else {
            return 0;
        }
    }
    
var newSortedArray = objArray.sort(potato);

//console.log(newSortedArray);

function fancyPotato(person1, person2) {
  
    var pOneEmail = person1.email;
    var pTwoEmail = person2.email;
  
        if (pOneEmail < pTwoEmail) {
            return -1;
        }
        else if (pOneEmail > pTwoEmail) {
            return 1;
        }
        else {
            return 0;
        }
    }
    
var secondSortedArray = objArray.sort(fancyPotato);

//console.log(secondSortedArray);

// Create a function that can be used with Array.prototype.map. 
//This function should take a number and return its square. 
// Then, use this function with map on an array of numbers to check the result.

function squareGetter (placeholderArray) {
  return placeholderArray.map(function squaresTheVar (x) {
    return Math.pow(x, 2);
  });
}
console.log(squareGetter([1, 5, 100]));


