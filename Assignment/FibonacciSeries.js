/* 
* Fibonacci Series
* Generate the first n terms of the Fibonacci sequence using a loop.
*
*/

function fibonacciSeries(num) {
    if (num < 1 ) {
        return "Ivaild Number";
    }

    let prev1 = 1;
    let prev2 = 0;
    
    if ( num == 1 ) {
        return prev1 ;
    }

    for (i=3; i<=num; i++) {
        let curr = prev1 + prev2 ;
        prev2 = prev1;
        prev1 = curr;
          return curr;
    }
  

}
let num =8;
let result = fibonacciSeries(num);
console.log(result);