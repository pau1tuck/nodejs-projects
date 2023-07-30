/*** JAVASCRIPT STRINGS ***/

let string= "   Hello, World!   ";
.trim(); // "Hello, World!"
.split(", "); // ["Hello", "World!"]
.split(/(?=[A-Z])/);
.substring(1, 4); // ell (uses indices)
.substr(1, 4) // ello (uses index and length)
.indexOf("World"); // 7 (index of first char)
.slice(7, 12); // "World"

.toLowerCase(); // "hello, world!"
.toUpperCase(); // "HELLO, WORLD!"
"Hello".concat(", ", "World!"); // "Hello, World!"

// string.padStart(max_length, value)
String(today.getDate()).padStart(2, '0') //
String(today.getMonth() + 1)).padStart(2, '0') //
.padEnd!

/*** parseInt(string, radix) ***/
parseInt("64")
parseInt("64");
parseInt("64.00");
parseInt("64.33");
parseInt("64 45 66");
parseInt(" 64 ");
parseInt("64 years");
parseInt("n = 64");
parseInt("64", 2) // 1000000 (binary)