/*** In this task, you are expected to write an error handler middleware for a Node.js server using Express.js. This middleware should catch any errors that occur during the processing of requests and write those errors to a log file on the server using Node.js's core 'fs' module.

The error logger should include the following details:

- Time of error occurrence.
- The error message.
- The stack trace.
- The route where the error occurred (request url).
- The HTTP method used (request method).
- Any additional data sent in the request (request body, params, or query).
- You should use the 'process' module to get the current working directory, and ensure that your file writing operation does not block the main thread.

Please remember that your middleware should be the last piece of middleware to be used by the application, after all routes and other middlewares. ***/
