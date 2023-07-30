/*** JAVASCRIPT OBJECTS ***/

// Safest method:
for (let key of Object.keys(obj)) {...} // gets an array of the object's enumerable properties

for (let key in myObject) { // Loop through an object
	if (myObject.hasOwnProperty(key) {
		console.log(`${key}: ${myObject[key]}`); // logs "key: value"
 }};
// or
.keys(obj).forEach(key => {
    console.log(`Key: ${key}, Name: ${obj[key]}`);
});

.assign() etc.
delete obj.name; // won't delete while frozen
.entries(obj); // ["name":"Paul","age":28,...]
.freeze(obj); // nothing added, removed, or changed
.getOwnPropertyNames(obj); // ["name", "age", "city", "country"]
.hasOwnProperty("age")); // true
.keys(obj); // e.g. ["name", "age", "city", "country"]
.seal(obj); // nothing added or removed; change okay
.values(obj); // e.g. ["Paul", 28, "Plymouth", "England"]

const action = {
	name: "Paul"
  greet() {
    console.log(`My name is ${this.name}.`);
}};
.getPrototypeOf(obj); // {} (i.e. Object.prototype)
.setPrototypeOf(obj, action);
  obj.greet(); // Output: "Hello, my name is Paul."