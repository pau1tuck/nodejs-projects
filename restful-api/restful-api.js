/*** Build an API that follows REST principles to handle CRUD (Create, Read, Update, Delete) operations on a resource, like a user or a blog post. ***/

const express = require("express");
const mongoose = require("mongoose");

// DATABASE
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

// EXPRESS
const app = express();

// JSON BODY PARSER
app.use(express.json());

// CREATE

// READ

// UPDATE

// DELETE

// SERVER
