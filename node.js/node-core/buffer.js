// Node.js Global Buffer Class

// 1. Create a Buffer
// Buffer.from() method returns a new Buffer that contains a copy of the provided data.
let bufferOne = Buffer.from("Hello, World!");
console.log(bufferOne.toString()); // Outputs: Hello, world!

// 2. Buffer Length
// The "length" property of a Buffer instance represents the amount of memory allocated for the buffer in bytes.
console.log(bufferOne.length); // Outputs: 13

// 3. Writing to Buffers
// Buffer.write() method writes a string to the buffer at a specific offset.
let bufferTwo = Buffer.alloc(10);
bufferTwo.write("Node.js");
console.log(bufferTwo.toString()); // Outputs: Node.js

// 4. Reading from Buffers
// Buffer.toString() method decodes and returns a string from buffer data.
console.log(bufferTwo.toString()); // Outputs: Node.js

// 5. Buffer Concatenation
// Buffer.concat() method returns a new buffer which is the result of concatenating all the Buffer instances in the array.
let bufferThree = Buffer.from(" is awesome!");
let bufferFour = Buffer.concat([bufferTwo, bufferThree]);
console.log(bufferFour.toString()); // Outputs: Node.js is awesome!

// 6. Buffer Comparison
// Buffer.compare() method returns a number indicating whether bufferOne comes before, after, or is the same as bufferTwo in sort order.
let bufferFive = Buffer.from("ABC");
let bufferSix = Buffer.from("BCD");
console.log(Buffer.compare(bufferFive, bufferSix)); // Outputs: -1

// 7. Buffer Copy
// Buffer.copy() method copies data from a region of target buffer to a region in the source buffer.
let bufferSeven = Buffer.from("Hello, Node.js!");
let bufferEight = Buffer.alloc(7);
bufferSeven.copy(bufferEight, 0, 0, 7);
console.log(bufferEight.toString()); // Outputs: Hello,

// 8. Buffer Slicing
// Buffer.slice() method returns a new buffer that references the same memory as the original, but offset and cropped by the start and end indices.
let bufferNine = bufferSeven.slice(0, 5);
console.log(bufferNine.toString()); // Outputs: Hello
