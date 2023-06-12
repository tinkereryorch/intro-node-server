const { resolveNaptr } = require('dns');
const http = require('http');

const PORT = 3002;

const server = http.createServer();

server.on('request', (req, res) => {
    if(req.url === '/friends'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
    
        res.end(JSON.stringify({
            id: 1,
            name: 'Doom Guy'
        }));
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})