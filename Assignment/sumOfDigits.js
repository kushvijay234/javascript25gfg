/* 
* Sum of Digits
* Find the sum of the digits of a number using a loop.
* Example 421 = 4+2+1 = 7
*/


function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.floor(num / 10);
    }

    return sum;
}

let result = sumOfDigits(421);
console.log(result);