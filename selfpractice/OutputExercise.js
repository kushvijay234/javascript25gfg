/* let data = 7
while(data>=0){
    if (data<=5){
        data--;
        continue;
    }
    console.log(data);
    data--;
} */

// Problem 2

/* let i = 5;
while (true) {
    console.log(i);
    i += 5;
    if (i > 30) {
        break;
    }
} */

// Problem 3

/* const str = "GeeksForGeeks";
for (let i = 0; i < str.length; i++)
     { 
        console.log(str[i]) ;

     } */

// Problem 4

console.log(foo());
var foo = function() {
  return "Function Expression";
};
function foo() {
  return "Function Declaration";
}