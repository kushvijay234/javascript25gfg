/* 
* Odd or Even 
*/

function evenOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    }else {
        return "Odd";
    }
}

let result = evenOdd(6);
console.log(result);