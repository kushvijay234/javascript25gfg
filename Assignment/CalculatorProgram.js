/* 
Calculator Program
Perform addition, subtraction, multiplication, or division based on user input (e.g., using if-else or switch).
*/

function calculator(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2 
    }
    else if (operator == '-') {
        return num1 - num2
    }
    else if (operator == '*') {
        return num1 * num2
    }
    else if (operator == "/") {
        if (num2 == 0) {
            return "cannot divided by zero"
        }
        else {
            return num1 / num2; 
        }
    }
    else {
        return "Invaild Operator"
    }
}

let result = calculator(2,5, '+');
console.log(result);