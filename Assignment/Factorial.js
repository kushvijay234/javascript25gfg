/* 
Factorial of a Number
Calculate the factorial of a given number using a for loop.
5! = 5 * 4 * 3 * 2 * 1 = 120
*/

let num = 5;

let res = 1;
for (let i = 1; i <= num; i++) {
    res = res * i;
}
console.log(res);