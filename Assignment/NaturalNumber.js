/* 
* Sum of Natural Numbers
* Find the sum of the first n natural numbers using a loop
*/
let num = 100;
let res = 1;
for (let i=1; i<=num; i++) {
    res = (num *(num+1)/2);
}
console.log(res);

/* 
* Output 
* 10 = 55
* 100 = 5050
*/