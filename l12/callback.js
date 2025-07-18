function sayHi (name, callback) {
    console.log("hi " + name);
    callback();
}

function greet() {
    console.log("Good Moring");
}

sayHi("Vijay", greet);

