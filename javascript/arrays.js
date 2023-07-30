/*** JAVASCRIPT ARRAYS ***/

let arr = new Array(4).fill(0); // [0, 0, 0, 0]
const staff = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    ,
    { name9: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" },
];

array.concat(newArray); // returns new array; don't try and `concat()` to a const variable!
= [...array, ...newArray];
= [...array, 8, 9];

staff.every(member => member.age > 20); // (current => conditional): true
.filter(num => num % 2 === 0); // (current => conditional): new even array
.find(element => element.age > 40); // staff[0]={object} (or undefined)
.findIndex(member => member.age > 40); // (e => conditional): 0 (Jam Josh)

staff.forEach((element, index, entireArray) =>
    console.log(`${index + 1}: ${element.name} earns ${element.currency} ${element.salary}`)
); // Note: forEach skips missing values; a for loop returns undefined
array.forEach(number => {
    sum += number;
}); // sum = sum + number

.from("Hello"); // ['H','e','l','l','o']
.from(new Set(arr)); // [0]
[..."Hello"]; // [ 'H','e','l','l','o']
[...new Set(arr)]; // [0]

let array = [1, 2, 3];

.includes(5); // true
.indexOf(2); // (i.e. whereis no.2?) else -1
.join(); // "1,2,3" (string)
.join(" "); // "1 2 3"
.map(person, i => `${i}: GBP ${person.salary * 0.8}`); // (current_value, index => f)
.pop(); // removes and returns last element
.push(6, 7); // adds 6, 7 to the end; returns new length of array
.reduce((a, c) => a + c, 0); // (acca, value) => f, init)
.reverse(arr);
.shift(); // removes and returns first element
.slice(3, 5); // array[3,4] sliced out to new array, last index not included
.some(num => num === 13); // (current_value => condition): false
.some(staffMember => staffMember.name === "Justina Kap"); // true

.splice(6, 1); // removes 1 element at index 6; returns values
.splice(7, 0, "ape", "hyena"); // adds 2 elements at array[7,8]; returns removed []

.sort((a, b) => a - b); // ascending // (value_1, value_2) => value_1 - value_2)
.sort((a, b) => b - a); // descending

"Hello".split(""); // [ 'H','e','l','l','o']
.toString(); // "1,2,3"
.unshift("dog", true); // adds first element; returns new length of array

// ARGS as Array
let myArgs = (...args) => {
    // args = "Hello", "World"
    console.log(args[1]); // "World!" (args as array)
    console.log(args.length); // 2
};
function args(x, y) {
    console.log(arguments.length); // 2 - Legacy
}
