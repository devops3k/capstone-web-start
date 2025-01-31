const http = require('http');
const fs = require('fs');

// Generate a random instance ID when container starts
const instanceId = Math.random().toString(36).substring(2, 8);
console.log(`Server instance ${instanceId} starting...`);

const server = http.createServer((req, res) => {
    if (req.url === '/appname') {
        res.writeHead(200);
        const response = `${process.env.APPNAME} (Instance: ${instanceId})`;
        res.end(response);
    } else {
        fs.readFile('./index.html', (err, data) => {
            res.writeHead(200);
            res.end(data);
        });
    }
});

server.listen(3000);
console.log(`Server instance ${instanceId} running on port 3000`);