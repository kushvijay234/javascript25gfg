/* 
* User enters a number, if the number is grater than 50 then ask the user to enter a number less
* then 50 again
*/

let readlineSync = require("readline-sync");

let number = readlineSync.question("Enter a number less than 50 ");

while (number >= 50) {
    number = readlineSync.question("Enter a number less then 50 -");
}

console.log("Number accepted");

