/* let data = {
    name: "test",
    age: 24,
    address: {
        city: "delhi",
        state: "delhi",
        country: "India",
    },
};

let {name, age, address, country, ...rest} = data;
console.log(name);
console.log(age);
console.log(address.country);
 */


function sum(...sum){
    let result = 0;
    for (let i=0; i<sum.length; i++) {
        result = result + sum[i]; 
    }
    console.log(result);
}

sum(1,2,3,4,5,7,8,9,10,11,12,13,14,15);