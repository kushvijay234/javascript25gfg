let number =15;

if ( number % 3 == 0 && number % 5 == 0 ) {
    console.log("FizzBizz");
} else if ( number % 5 == 0) {
    console.log("Buzz");
} else if ( number % 3 == 0) {
    console.log("Fizz");
} else  {
    console.log(number);
}