const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  res.writeHead(200, {
    'context-type': 'text/html;charset=UTF-8',
  });
  res.write(`hello ${url}`);
  res.end();
});

server.listen(8080, () => {
  console.log('https://localhost:8080');
});
