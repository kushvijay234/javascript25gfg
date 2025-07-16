/* 
Leap Year Check
Determine whether a given year is a leap year.

*/

function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0){
                return "Leap Year"
            } else {
                return "Normal Year"
            }
        }else {
            return "Leap Year"
        }
    }
    else  {
        return "Normal Year"
    }
}

let result = isLeapYear(2056);
console.log(result);