var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = 3000;

http
  .createServer((request, response) => {
    console.log('Port Number : 3000');

    // change the MIME type from 'text/plain' to 'text/html'
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    // reading the content file
    fs.readFile('index.html', (err, data) => {
      //checking for errors
      if (err) {
        throw err;
      }
      console.log('Operation Success');
      // sending the response
      response.end(data);
    });
  })
  .listen(port);
