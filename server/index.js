const { resolveNaptr } = require('dns');
const http = require('http');

const PORT = 3002;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'Doom Guy'
    },
    {
        id: 1,
        name: 'Lara Croft'
    },
    {
        id: 2,
        name: 'Nathan Drake'
    }
];

server.on('request', (req, res) => {
    if (req.url === '/friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify({
            id: 1,
            name: 'Doom Guy'
        }));
    } else if (req.url === '/messages') {
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hi Doom Guy!</hi>');
        res.write('<li>How are things in Phobos?</hi>');
        res.write('</ul>');
        res.write('</html>');
        res.write('</body>');
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})