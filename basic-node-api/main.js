const http = require('http');

// ? Creating a server and defining routes using 'if conditions'
const server = http.createServer(async (req, res) => {
    // ? Request Route
    if (req.url === "/hello" && req.method === "GET") {
        // ? Response Headers
        res.writeHead(200, { "Content-Type": "application/json" });
        // ? Response body
        res.write("Hello World");
        // ? Ending the response
        res.end();
    }

    // ? Route not found
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

// ? Listening to the server on given port
server.listen(3000, () => {
    console.log(`server started on port: ${3000}`);
});