const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!doctype html>
    <html>
      <head>
        <title>Dummy App</title>
      </head>
      <body>
        <h1>Hello from dummy app 3</h1>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Dummy app running on http://localhost:${port}`);
});