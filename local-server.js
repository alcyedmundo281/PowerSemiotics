const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;
const baseDir = path.resolve(__dirname);

const server = http.createServer((req, res) => {
  let requestedPath = req.url;
  if (requestedPath === '/') {
    requestedPath = '/index.html';
  }

  const filePath = path.join(baseDir, requestedPath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.gif': 'image/gif',
    };
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`Servidor local disponible en http://localhost:${port}`);
});
