/*** In this task, you are expected to write an error handler middleware module for a Node.js server using Express.js. This middleware should catch any errors that occur during the processing of requests and write those errors to a log file on the server using Node.js's core 'fs' module.

The error logger should include the following details:

- Time of error occurrence.
- The error message.
- The stack trace.
- The route where the error occurred (request url).
- The HTTP method used (request method).
- Any additional data sent in the request (request body, params, or query).
- You should use the 'process' module to get the current working directory, and ensure that your file writing operation does not block the main thread.

Please remember that your middleware should be the last piece of middleware to be used by the application, after all routes and other middlewares. ***/

import express, {Request, Response, NextFunction} from "express";
import fs from "fs";
import path from "path";

const app = express()
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Hello!");
})

app.get("error", (req: Request, res: Response, next: NextFunction) => {
	next(new Error("This is an error!"));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	const errorDetails = {
		time: new Date().toISOString(),
		error: err.message,
		stack: err.stack,
		route: req.originalUrl,
		method: req.method,
		requestBody: req.body,
	};
	const logFilePath = path.join(process.cwd(), "error.log");

	fs.appendFile(logFilePath, `${JSON.stringify(errorDetails)}\n`, "utf-8", (error) => {
		if (error) {
			console.error("Failed to write to log file:", error);
		}
	});

	res.status(500).send("An error occured, please check the server logs.")
});

app.listen(3000, () => console.log("Server running on port 3000"));