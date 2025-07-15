/* 
* Count Digits in a Number
* Count the number of digits in a given number using a loop.
*/

function countDigit(n) {
    
    // Base case
    if (n === 0)
        return 1;
    let count = 0;
    while (n !== 0) {
        n = Math.floor(n / 10);
        ++count;
    }
    return count;
}

let n = 58964;
console.log( countDigit(n));
