/* 
Counting Char 
*/

let message = "Welcome to Geeks for Geeks";

for(let i=0; i<message.length; i++) {
    console.log(message[i]);
}

// Second Method 
// For of loop

for (char of message) {
    console.log(char);
}

let count = 0;
for (char of message) {
    if (char == 'e') {
        count++;
    }
}
console.log(count);

