/*** JAVASCRIPT NUMBERS ***/

Number()

ValueOf()

// Nanoseconds to seconds:
const elapsed = time[0] + time[1] / 1e9;
elapsed.toFixed(3)

toPrecision()	  // Length
toExponential()

/*** toString() ***/
toString()
const num = 10;
num.toString()    // as String    "10"
num.toString(10)  // Decimal      "10.0"
num.toString(2)   // Binary       "1010"
num.toString(16)  // Hexadecimal  "0xA"
num.toString(8)   // Octal        "0o12"
num.toString(36)  // Base 36      "A"


/*** Modulo % ***/

/*** XOR ^ ***/
// XOR as a mathematical operation to compare binary numbers:
a ^ b

/*** MATH._ ***/
Math.PI; // 3.141592653589793 - Ratio of circumference to diameter
Math.E; // 2.718281828459045 - Euler's number, the base of natural logarithms

Math.round(5.95); // 6     - to nearest integer
Math.ceil(5.3);   // 6     - up to nearest integer
Math.floor(5.95); // 5     - down to nearest integer
Math.trunc(5.95); // 5     - integer only
Math.abs(-7.25);  // 7.25  - absolute value

x++, x--
2 ** 3 // 8, or
Math.pow(2, 3);  // 8 - base ^ exponent
Math.sqrt(16);   // 4 - square root
Math.cbrt(27);   // 3 - cube root
Math.min(3, 9, 5, 6, 7); // 3
Math.max(3, 9, 5, 6, 7); // 9

Math.random(); // 0 - 0.999999..
Math.ceil(Math.random() * 10 )) // random integer from 1 to 10

Math.log10(100); // base 10 logarithm
Math.log(1); // 0 - natural logarithm (base e)
Math.exp(1); // Euler's number (approx. 2.718) raised to the power of a number

e. ln(x)

