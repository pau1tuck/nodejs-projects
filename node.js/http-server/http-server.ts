import * as http from "http";
import * as fs from "fs";

const server: http.Server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.write("<h1>Internal Server Error</h1>");
                res.end();
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }
});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
