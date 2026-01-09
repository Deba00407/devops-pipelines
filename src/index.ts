import * as http from "node:http";

const server = http.createServer((req, res) => {
    res.writeHead(
        200,
        {"Content-Type": "application/json"}
    );

    res.end(
        JSON.stringify({
            "message": "Hello there! Welcome to the home page"
        })
    );
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});