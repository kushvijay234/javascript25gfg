/* 
* Grade Calculator
* Take a student's marks as input and print their grade using conditions:
* 90-100: A
* 80-89: B
* 70-79: C
* 60-69: D
< 60: F

*/

function gradeCalcualtor(num) {
    if (num < 60 ){
        return "F";
    }
    else if (num < 69) {
        return "D";
    }
    else if (num < 79) {
        return "C";
    }
    else if (num < 89) {
        return "B";
    }
    else if (num <= 100) {
        return "A";
    }
    else {
        return "Number greater Than 100";
    }
}

let result = gradeCalcualtor(75);
console.log(result);