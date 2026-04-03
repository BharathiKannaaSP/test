let obj1 = { name: "Bharathi" };
let obj2 = obj1; // copied by reference
obj2.name = "Kannaa";

console.log(obj1.name); // "Kannaa"
console.log(obj2.name); // "Kannaa"

let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3,4]
