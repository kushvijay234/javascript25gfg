/* 
* Error Handling 
* using try and catch Block
*/

const userName = "Prakash";
try {
    console.log(myname);
} catch (error) {
    console.log(error.name, error.message, error.stack);
    console.log("Error Occur");
}
console.log(userName);

