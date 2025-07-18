/* function calculatePercent(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let percentage = arr[i] * 0.10;
    result.push(percentage);
  }
  return result;
}

let amount = [200, 400, 500, 600, 700, 800];
let tenPercentValues = calculatePercent(amount);

console.log(tenPercentValues);

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

function calculatePercent(amount, cb) {
    let result = [];
  for (let i = 0; i < amount.length; i++) {
    result.push(cb(amount[i]));
  }
  return result;
}

let result = calculatePercent(amount, calThtyper);
console.log(result);

