const fs = require("fs").promises; // import { promises as fs } from 'fs';
const filepath = path.join(process.cwd(), "hello.txt"); // or:
const filepath = path.join("../..", "hello.txt);

// PROMISE with ASYNC-AWAIT
const run = async () => {
	try { const contents = await fs.readFile(filepath, "utf8"); }
	catch (err) { console.log(err); }
};

// PROMISE
fs.readFile(filepath, "utf8")
	.then((contents) => { console.log(contents); }) {
	.catch((err) => { console.log(err) })
    });

// CALLBACK (Legacy)
fs.readFile(filepath, "utf8", (err, contents) => {
	if (err) { return console.log(err); }
	fs.writeFile(filepath, contents.toUpperCase(), (err) => {
		if (err) throw err; }
    });

// SYNCHRONOUS
const filedata = fs.readFileSync(filepath, "utf8");
fs.writeFileSync(filepath, newFileData);

// CHECK FILE EXISTS
if (fs.existsSync(filePath)) {...} // Method 1
fs.access(file, fs.constants.F_OK, (err) => { // Method 2
    if (err) {
        console.log('File does not exist');
    } else {
        console.log('File exists');
    }
});

try { fs.chmod('path/to/file.txt', 0o644); }
fs.stat(filepath);
fs.lstat(fileLinkPath);
fs.watchFile(filepath, (current, previous) => { // watch for changes
	return console.log(`$(filepath) updated at ${(current.mtime)}`); }
fs.watch();

