/*** JAVASCRIPT OBJECTS ***/

// Safest method:
for (let key of Object.keys(obj)) {...} // gets an array of the object's enumerable properties

for (let key in myObject) { // Loop through an object
	if (myObject.hasOwnProperty(key) {
		console.log(`${key}: ${myObject[key]}`); // logs "key: value"
 }};
// or
Object.keys(obj).forEach(key => {
    console.log(`Key: ${key}, Name: ${obj[key]}`);
});

Object.keys(obj); // e.g. ["name", "age", "city", "country"]
.assign() etc.
obj.hasOwnProperty("age")); // true
Object.getOwnPropertyNames(obj); // ["name", "age", "city", "country"]
Object.values(obj); // e.g. ["Paul", 28, "Plymouth", "England"]
Object.entries(obj); // ["name":"Paul","age":28,...]
Object.freeze(obj); // nothing added, removed, or changed
  delete obj.name; // won't delete while frozen
Object.seal(obj); // nothing added or removed; change okay

const action = {
	name: "Paul"
  greet() {
    console.log(`My name is ${this.name}.`);
}};
Object.getPrototypeOf(obj); // {} (i.e. Object.prototype)
Object.setPrototypeOf(obj, action);
  obj.greet(); // Output: "Hello, my name is Paul."