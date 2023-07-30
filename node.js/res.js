res.json({ message: "Hello, World!" }); // json

res.send("Hello, World!"); // plain text

// Send a file as the response with optional options and a callback
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/path/to/file.txt"));
});

res.status(200).json({ success: true });

res.redirect("/new-page");

// View template with optional data
res.render("index", { title: "Home" });

// Set HTTP response header
res.set("X-Custom-Header", "Custom Value");

// Get HTTP response header
const contentType = res.get("Content-Type");

res.removeHeader("X-Custom-Header");

// Send an HTTP response with a custom status message
res.sendStatus(404);

res.cookie("user", "john_doe", { maxAge: 900000, httpOnly: true });

res.clearCookie("user");

// Set an HTTP response location header
res.location("/new-page");

// Append a value to the "Link" response header
res.links({
    next: "http://example.com/page/2",
    prev: "http://example.com/page/1",
});

// Set the "Content-Type" response header
res.type("application/json");

res.end();
