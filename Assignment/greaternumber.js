/* 
Maximum of Three Numbers
Find the largest of three numbers using nested if statements.
*/

function greaterNumber(num1, num2, num3) {
    if(num1 > num2 && num1 > num3 ) {
        return "Greater Number is  Num1"
    }
    else if (num2 > num1 && num2 > num3) {
        return "Greater Number is  Num2"
    }
    else {
        return "Greater Number is  Num3"
    }
}

let result = greaterNumber(12, 24, 48);
console.log(result);