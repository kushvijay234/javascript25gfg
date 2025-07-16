/* 
Day of the Week
Take a number (1–7) as input and print the corresponding day of the week.
*/

function getDayOfWeek(number) {
    switch (number) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid number! Please enter a number from 1 to 7.";
    }
}

console.log(getDayOfWeek(3)); 
console.log(getDayOfWeek(9)); 