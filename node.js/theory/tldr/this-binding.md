# `this` Binding

Arrow functions don’t bind their own ‘this’ value. Instead, the ‘this’ value of the scope in which it was defined is accessible. This makes arrow functions bad candidates for methods, as this won’t be a reference to the object the method is defined on.

For methods, ES6 provides a new method definition syntax. You can see this in the definition of the printGuestList method below. That function is a standard function, just with a shorthand syntax which allows for the removal of the colon and the function keyword.

Because arrow functions don’t bind this, they work well for everything except methods. As shown below, the arrow function passed to forEach is able to access this.name correctly, as it’s defined as an arrow function and doesn’t have this binding of its own. That code wouldn’t work if you swapped out the arrow function for a standard function.

Create a folder and add a file for example index.js. To run this file you need to run the following command.

node index.js
Filename: index.js

// 'This' in Arrow function
const eventOne = {
    name: 'Birthday Party',
    guestList: ['Gourav', 'Vijay'],
    printGuestList() {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        });
    }
}

// 'This' in normal function
const eventTwo = {
    name: 'Birthday Party',
    guestList: ['Gourav', 'Vijay'],
    printGuestList() {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach(function (guest) {
            console.log(guest + ' is attending ' + this.name)
        });
    }
}

eventOne.printGuestList();
console.log('---------------------');
eventTwo.printGuestList();
Steps to run the program:

Run index.js file using the following command:
node index.js
Output of above command
