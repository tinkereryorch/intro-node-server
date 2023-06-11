const http = require('http');

const PORT = 3002;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
    });
    res.end('Hello! The Doom guy is your friend!');
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})