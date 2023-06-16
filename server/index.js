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
    const items = req.url.split('/');
    if (req.method == 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request: ', friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);
    } else if (req.method == 'GET' && items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (req.method == 'GET' && req.url === '/messages') {
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