function makeSandwich(bread, cb) {
    console.log("Making a sandwich with " + bread);
    cb();
}

function applysauce(sauce, cb) {
    console.log("Appling" + sauce);
    cb();
}

function stuffing(stuff, cb) {
    console.log("stuffing with" + stuff);
    cb();
}

function grilled(temp, cb) {
    console.log("Grilled" + temp);
    cb();
}

function serving(plate, cb){
    console.log("Serving on " + plate);
    cb();
}

makeSandwich("brown Bread" , () => {
    applysauce("mayo", () => {
        stuffing("potato", () => {
            grilled("high", () => {
                serving("plate", () => {
                    console.log("Sandwich is ready");
                });
            });
        });
    });
});