const fs = require("fs").promises; // import { promises as fs } from 'fs';
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt"); // or: const filepath = path.join("../..", "hello.txt");

// PROMISE with ASYNC-AWAIT
const run = async () => {
    try {
        const contents = await fs.readFile(filepath, "utf8");
        console.log("File contents (async):", contents);
    } catch (err) {
        console.log(err);
    }
};

// PROMISE
fs.readFile(filepath, "utf8")
    .then(contents => {
        console.log("File contents (promise):", contents);
    })
    .catch(err => {
        console.log(err);
    });

// CALLBACK (Legacy)
fs.readFile(filepath, "utf8", (err, contents) => {
    if (err) {
        return console.log(err);
    }
    console.log("File contents (callback):", contents);

    // Writing the file with contents in uppercase
    fs.writeFile(filepath, contents.toUpperCase(), err => {
        if (err) throw err;
        console.log(
            "File written successfully with uppercase contents.",
        );
    });

    // Appending contents to a log file
    const logFilePath = path.join(process.cwd(), "log.txt");
    fs.appendFile(
        logFilePath,
        `${JSON.stringify(contents)}\n`,
        "utf-8",
        error => {
            if (error) {
                console.error("Failed to write to log file:", error);
            }
        },
    );
});

// SYNCHRONOUS
try {
    const filedata = fs.readFileSync(filepath, "utf8");
    console.log("File contents (synchronous):", filedata);

    const newFileData = "Hello, Node.js!";
    fs.writeFileSync(filepath, newFileData);
    console.log("File written successfully with new contents.");
} catch (err) {
    console.log(err);
}

// CHECK FILE EXISTS
// Method 1
if (fs.existsSync(filepath)) {
    console.log("File exists (method 1)");
}

// Method 2
fs.access(filepath, fs.constants.F_OK, err => {
    if (err) {
        console.log("File does not exist (method 2)");
    } else {
        console.log("File exists (method 2)");
    }
});

// Changing file permissions (chmod)
try {
    fs.chmod(filepath, 0o644);
    console.log("File permissions changed successfully.");
} catch (err) {
    console.log(err);
}

// Get file stats
fs.stat(filepath)
    .then(stats => {
        console.log("File stats:", stats);
    })
    .catch(err => {
        console.log(err);
    });

// Get symbolic link stats
const fileLinkPath = path.join(process.cwd(), "filelink.txt");
fs.lstat(fileLinkPath)
    .then(stats => {
        console.log("Symbolic link stats:", stats);
    })
    .catch(err => {
        console.log(err);
    });

// Watch for file changes
fs.watchFile(filepath, (current, previous) => {
    console.log(`File updated at ${current.mtime}`);
});

// Watch for directory changes
fs.watch(process.cwd(), (eventType, filename) => {
    console.log(`Event type: ${eventType}, filename: ${filename}`);
});
