# Understanding Promises, `async` and `await`

JavaScript, as a language, is well-known for its asynchronicity which means that if any action takes a while, your program can continue doing other things while the action completes, and once the action is completed, you can do something with the result. The asynchronicity feature is highly beneficial in scenarios such as data fetching, although it can be quite challenging to comprehend for beginners. JavaScript provides several ways to handle asynchronous programming, among which are callback functions, Promises, and async-await.

## Simple TL;DR

Let's tackle this as if it were a fun video game adventure.

Imagine you're a brave knight, and you've been given a quest to fetch a magical artifact, the "Crystal of Knowledge", from the top of a mountain. But here's the thing: you can't continue your journey until you have the crystal. It's like an item you need to unlock the next part of the game.

In the world of JavaScript, this is a lot like making an asynchronous operation - you're telling the program to go off and do something (like fetch data from a server), and then wait for the result before moving on. This is where "promises", "async", and "await" come into play.

A **Promise** in JavaScript is just like the quest you got from the king. It's an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. There are three states:

- Pending (The king gave you the quest)
- Fulfilled (You got the crystal)
- Rejected (A dragon burned you to a crisp before you could get the crystal)

When the quest is successful (fulfilled), you've got the Crystal of Knowledge, and you're ready to move on. If it fails (rejected), you might need to figure out a new plan.

Now, let's talk about **async** and **await**. These are just cool tools to help you handle promises more easily, making your code cleaner and easier to understand.

The **async** keyword is used to define an asynchronous function. This function will return a promise, just like the king gave you a quest. It's saying, "I'm going to do this thing, and I promise to give you something when I'm done."

The **await** keyword is used inside an async function to pause the execution of the function until a promise is fulfilled or rejected, just like waiting for the quest to be completed before you move on in your adventure. It makes JavaScript wait until the promise settles, and then go on with the result.

In our knight scenario, it's like telling your knight to sleep at the inn (await) until the blacksmith finishes crafting your armor (async operation). Once the armor is done (promise is fulfilled), your knight wakes up and continues his journey with the new shiny armor.

**Promise chaining** is like undertaking multiple quests in a certain order. Let's say after getting the crystal, you must then find the Enchanted Forest, and then finally defeat a troll. You can only do these one after the other - you can't skip straight to the troll. In JavaScript, promise chaining is doing several operations that happen one after the other, each one starting when the previous operation successfully completes.

And there you have it, a knight's guide to JavaScript promises, async, await, and promise chaining! Now go slay those code dragons!

## Callback Functions

A callback function is a function that you provide to be executed after the completion of an asynchronous operation [[4](https://dev.to/nas5w/asynchronous-javascript-how-callbacks-promises-and-async-await-work-1f7p)]. Callback functions represent the traditional method to handle asynchronous operations, which is particularly visible in AJAX operations [[2](https://itnext.io/javascripts-async-await-versus-promise-the-great-debate-6308cb2e10b3)].

For instance, consider an asynchronous operation where user data is fetched from an API. In a scenario without a callback, the data does not exist until the fetch operation completes. To be able to do something with this data, we can pass a callback function that will handle the data once the fetch operation is done.

The issue with callbacks becomes apparent as applications grow in complexity. As multiple asynchronous operations become nested within each other, the code becomes more difficult to read and understand - a situation often referred to as "callback hell" [[1](https://overclocked.medium.com/truly-understanding-javascript-promises-await-and-async-f3f51e283554)].

## Promises

Promises in JavaScript represent the eventual completion of an asynchronous operation. A Promise can either be resolved or rejected. When a Promise resolves, you can handle its returned value with the `then()` method. If a Promise is rejected, you can use `catch()` to handle the error [[4](https://dev.to/nas5w/asynchronous-javascript-how-callbacks-promises-and-async-await-work-1f7p)].

Promises are objects that represent the result of an asynchronous operation that may not be available yet. A Promise can be chained with other promises using `.then()` and `.catch()` methods, or passed to other functions that expect a Promise [[3](https://www.linkedin.com/advice/1/what-some-best-practices-tips-writing-clean-readable-async)].

They offer a more organized way to handle asynchronous operations as compared to callbacks, and greatly improve code readability and maintainability, which helps to avoid the issues commonly associated with callback hell [[1](https://overclocked.medium.com/truly-understanding-javascript-promises-await-and-async-f3f51e283554)].

## Async/Await

Async/Await in JavaScript is essentially syntactic sugar on top of Promises, making asynchronous code look and behave more like synchronous code. The `async` keyword is used to define an asynchronous function that returns a Promise, and `await` is used to pause the execution of the function until a Promise is resolved or rejected [[2](https://itnext.io/javascripts-async-await-versus-promise-the-great-debate-6308cb2e10b3)].

The async-await syntax allows for cleaner and more readable code that operates with Promises, effectively avoiding the callback hell scenario. It also simplifies error handling in asynchronous code, as try-catch blocks can be used in a similar way to synchronous code [[3](https://www.linkedin.com/advice/1/what-some-best-practices-tips-writing-clean-readable-async)].

Even though both Promises and Async/Await end up accomplishing the same thing, handling asynchronous data calls in a performant, consistent manner, your choice between the two often depends on your specific use case and personal preference [[2](https://itnext.io/javascripts-async-await-versus-promise-the-great-debate-6308cb2e10b3)].

## Promise Chaining in Node.js: Simplifying Asynchronous Code

Asynchronous operations are a common occurrence in JavaScript and Node.js, especially when dealing with tasks like making API calls, reading files, or accessing databases. Handling multiple asynchronous operations can lead to complex and nested code structures, making it challenging to read and maintain. This is where Promise chaining comes to the rescue, providing an elegant solution for managing asynchronous tasks in a more concise and readable manner.

The beauty of Promises lies in their ability to chain multiple asynchronous operations together, making it easier to handle multiple tasks without ending up in callback hell.

### Basic Promise Chaining

Promise chaining involves returning a new Promise from a `.then()` or `.catch()` block, allowing us to chain more asynchronous operations or handle errors gracefully. The result of one Promise becomes the input for the next Promise in the chain.

Let's illustrate this with a simple example:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched'), 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${data} and procesed`), 500);
  });
}

fetchData()
  .then(data => {
    console.log(data);
    return processData(data);
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

In this example, the `fetchData()` function returns a Promise that resolves with `'Data fetched'` after 1 second. We then chain a `.then()` block to handle the resolved value and pass it to the `processData()` function. The `processData()` function returns another Promise that resolves with `'Data fetched and processed'` after 0.5 seconds. The final `.then()` block handles the result of the second Promise.

### Error Handling in Promise Chaining

With Promise chaining, error handling becomes more elegant. We can use the `.catch()` block at the end of the chain to catch and handle any errors that occurred during any of the previous Promises.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('Error fetching data'), 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${data} and processed`), 500);
  });
}

fetchData()
  .then(data => {
    console.log(data);
    return processData(data);
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

In this example, the `fetchData()` function now rejects the Promise with `'Error fetching data'` after 1 second. The `.catch()` block at the end of the chain catches this error and logs `'Error: Error fetching data'`.

### Chaining Multiple Asynchronous Operations

One of the major benefits of Promise chaining is the ability to chain multiple asynchronous operations in a sequence, making the code more organized and easier to read.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched'), 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${data} and processed`), 500);
  });
}

function saveData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${data} and saved`), 300);
  });
}

fetchData()
  .then(data => {
    console.log(data);
    return processData(data);
  })
  .then(processedData => {
    console.log(processedData);
    return saveData(processedData);
  })
  .then(savedData => {
    console.log(savedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

In this example, we have added a `saveData()` function that returns a Promise that resolves with `'Data fetched and processed and saved'` after 0.3 seconds. We can easily chain this function after the `processData()` function to handle the saved data.

Promise chaining is a powerful technique that simplifies handling asynchronous operations in JavaScript and Node.js. It allows us to chain multiple asynchronous tasks together, making the code more organized, readable, and maintainable. By leveraging `.then()` and `.catch()` blocks, we can handle resolved values and errors gracefully. Whether it's fetching data from APIs, reading files, or any other asynchronous operation, Promise chaining helps developers write cleaner and more efficient code. Embrace Promise chaining, and your asynchronous JavaScript code will become a joy to work with.

## Conclusion

Understanding Promises, Async/Await, and Callbacks is key to mastering asynchronous JavaScript. While callbacks were the traditional method of handling asynchronous JavaScript, the introduction of Promises and Async/Await have made writing and reading asynchronous JavaScript more manageable and intuitive. It's important to note that these aren't mutually exclusive or sequential improvements - rather, they are different tools available within the language, each suitable for different scenarios. A good grasp of these concepts will enable you to write efficient and clean JavaScript code, better equipped to handle complex tasks.
