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

console.log(sortedArray);
