/* 
Positive, Negative, or Zero
Check if a given number is positive, negative, or zero.
*/

function checkNum(num) {
    if (num > 0) {
        return "Postive Number"
    }else if (num < 0) {
        return "Negative Number"
    }else {
        return "Zero"
    }
}

let result = checkNum(9);
console.log(result);