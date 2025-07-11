
// global 
/* var a =10;
function print() {
    console.log(a);
}

print(); */

// Function scope

/* function print () {
    let a = 10;
    console.log(a);
}
 */
// block code 

/* {
    let a =10;
    const b =20;
    var c = 30;
} */

// console.log(a); 
// a not define 

// console.log(b);
// b is not define 

// console.log(c);
// access 

// block
/* function outer () {
    var a = 10;

    function inner () {
        console.log(a); 
    }
    inner();
}
outer(); */


/* function outer () {
    var a = 10;

    function inner () {
        console.log(a); 
    }
    function inner1 () {
        console.log(a);
    }
    inner();
    inner1();
}
outer(); */

// lexical
 let a = 10;
function parent() {
    function child1 () {
        function child2() {
            function child3() {
                console.log(a);
            }
            child3();
        }
        child2();
    }
    child1();
}
parent();
