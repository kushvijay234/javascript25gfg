/* 
* Reverse a Number
* Write a program to reverse the digits of a number using a loop.
*/

let num = 123;
let res = 0;
while ( num > 0) {
    let lastDigit = num % 10;
    res = (res * 10) + lastDigit;
    num = Math.floor(num / 10); 
}


console.log(res);