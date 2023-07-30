import express, { Request, Response } from "express";
import mongoose from "mongoose";

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
interface IUser extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}

const User = mongoose.model < IUser > ("User", userSchema);

// EXPRESS APP
const app = express();

// JSON BODY PARSER
app.use(express.json());

// ROUTE HANDLERS
/***
 * CREATE
 ***/
app.post("/register", async (req: Request, res: Response) => {
    // Create a new instance of the User model:
    const newUser = new User(req.body);

    // Save new user to the database:
    await newUser.save();

    // Send newUser back in the response:
    res.send(newUser);
});

/***
 * READ
 ***/
app.get("/users/:id", async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);
    res.send(user);
});

/***
 * UPDATE
 ***/
app.put("/users/:id", async (req: Request, res: Response) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedUser);
});

/***
 * DELETE
 ***/
app.delete("/users/:id", async (req: Request, res: Response) => {
    const user = await User.findByIdAndRemove(req.params.id);
    res.send(user);
});

// SERVER
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
