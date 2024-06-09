const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
});

module.exports = app;
