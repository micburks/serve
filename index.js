const http = require('http');

module.exports = function serve({ callback, port }) {
  const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(await callback(req));
      res.end();
    } else {
      res.writeHead(404);
      res.end();
    }
  });

  server.listen(port || 1337);
}
