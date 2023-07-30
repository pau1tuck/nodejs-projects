// JSON > JAVASCRIPT
// JSON.parse(text, reviver)
let data = fs.readFileSync("file.json", "utf8");
let jsonObj = JSON.parse(data);

fs.readFile("file.json", "utf8", (err, data) => {
    if (err) throw err;
    let jsonObj = JSON.parse(data);
});

// JAVASCRIPT > JSON (file)
// JSON.stringify(data, replacer function, spacing 0-10)
fs.writeFileSync(path.join(process.cwd(), "data/rates.json"), JSON.stringify(rates, null, 2));
