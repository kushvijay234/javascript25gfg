// let arr1 =[11,2,3,4,4,4];

// let arr2 = arr1;

// arr2.push(6)

// console.log(arr2);
// console.log(arr1);


// let person = {
//     fname: "hello",
//     lname: "world",
//     age: 24,
//     address:  {
//         city: "delhi",
//         state: "delhi",
//         country: {
//             name : "india",
//             code: "IN",
//         },
//     },
// };

// let person2 = structuredClone(person);
// person2.age=45;
// person2.address.country.code = "USA";
// console.log(person);
// console.log(person2);


const arr1 = [1,2,3,4,[6,7,8,9]];
// const arr2  =  structuredClone(arr1);
// arr2.push(5);
// arr2[4].push(10);

// console.log(arr1);
// console.log(arr2);

const arr2 = JSON.parse(JSON.stringify(arr1));
arr2.push(5);
arr2[4].push(10);

console.log(arr1);
console.log(arr2);