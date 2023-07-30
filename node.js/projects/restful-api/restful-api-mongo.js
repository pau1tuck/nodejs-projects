/*** Build an API that follows REST principles to handle CRUD (Create, Read, Update, Delete) operations on a user resource ***/

const express = require("express");
const mongoose = require("mongoose");

// MONGODB DATABASE
mongoose.connect("mongodb://localhost:27017/app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

// USER SCHEMA
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

// USER MODEL
const User = mongoose.model("User", userSchema);

// EXPRESS APP
const app = express();

// JSON BODY PARSER
app.use(express.json());

// ROUTE HANDLERS
/***
 * CREATE
 ***/
app.post("/register", async (req, res) => {
    // Create a new instance of the User model:
    const newUser = new User(req.body); // req.body contains the JSON data sent in the HTTP POST request.

    // Run an asynchronous operation that writes the new user to the database:
    await newUser.save();

    // Send newUser back in the response:
    res.send(newUser);
    // This enables the client to receive the full user object back from the database, including any default values, unique IDs, or timestamps that were added upon saving to the database.
});

/***
 * READ
 ***/

// UPDATE

// DELETE

// SERVER
