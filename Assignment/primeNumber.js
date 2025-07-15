/* 
* Check Prime Number
* Check if a given number is prime using a loop.
* 
*/

function primeNumber(num) {
    if (num < 2) {
        return "Not Prime";
    }
    for (let i=0; i<num; i++) {
        if (num % i === 0) {
            return "Not Prime";
        }
    } 
    return "Prime";
    
}

let result = primeNumber(6);

console.log(result);