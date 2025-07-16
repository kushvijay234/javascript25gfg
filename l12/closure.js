function outer() {
    let value = "vikas";
    function inner() {
        console.log(value);
    }
    return inner;
}
let res = outer();
console.log(res);
res();