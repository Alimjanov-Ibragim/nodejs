var http = require('http');
var fs = require('fs');

console.log('Server will listen at :  127.0.0.1:3000 ');

// var host = '127.0.0.1';
var port = 3000;

http
  .createServer((request, response) => {
    console.log('Port Number : 3000');

    // change the MIME type from 'text/plain' to 'application/pdf'
    response.writeHead(200, {
      'Content-Type': 'application/pdf'
    });

    fs.readFile('index.pdf', (error, data) => {
      if (error) {
        response.json({ status: 'error', msg: 'error' });
      } else {
        response.write(data);
        response.end();
      }
    });
  })
  .listen(port);
