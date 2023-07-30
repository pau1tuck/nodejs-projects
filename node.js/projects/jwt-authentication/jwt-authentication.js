// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");

// MONGODB DATABASE
mongoose
    .connect("mongodb://localhost:27017/userAPI")
    .then(() => console.log("Database connected!"))
    .catch(err => console.log("Could not connect to database:", err));

// USER DOCUMENT SCHEMA
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

// USER MODEL
const User = mongoose.model("User", userSchema);

// EXPRESS APP
const app = express();

// JSON PARSER
app.use(express.json());

// SESSION HANDLER
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    })
);

// REGISTER
app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({ name: req.body.name, email: req.body.email, password: hashedPassword });
        await newUser.save();
        res.status(201).send(newUser);
    } catch {
        res.status(500).send();
    }
});

// SIGN IN
app.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user && (await bcrypt.compare(req.body.password, user.password))) {
        // User found and password matches
        const token = jwt.sign({ id: user._id }, "your jwt secret", { expiresIn: "2h" }); // Generate a new JWT
        req.session.jwt = token; // Store JWT in the session
        res.status(200).send({ message: "Logged in", token: token });
    } else {
        // User not found or password does not match
        res.status(400).send({ message: "Invalid credentials" });
    }
});

// SERVER
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
