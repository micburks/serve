const http = require('http');

module.exports = function serve({callback, port}) {
  const port = port || 1337;
  const server = http.createServer(async (req, res) => {
    try {
      const content = await callback(req.url);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(content);
      res.end();
    } catch (error) {
      res.writeHead(500);
      res.write(error);
      res.end();
    }
  });
  server.listen(port, () => {
    console.log(`serving http://localhost:${port}`);
  });
}
