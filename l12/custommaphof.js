/* 
custom higher order Function 
*/

let amount = [200, 400, 500, 600, 700, 800];

function calTenPer(amount) {
    return amount * 0.1;
}

function calTwePer(amount){
    return amount * 0.2;
}

function calThtyper(amount){
    return amount * 0.3;
}

Array.prototype.calculate = function (cb) {
    let res = [];
    for (let i=0; i < this.length; i++) {
        res.push(cb(this[i]));
    }
    return res;
};

console.log(amount.calculate(calThtyper));

