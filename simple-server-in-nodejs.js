var http = require('http');
var fs = require('fs');

console.log('Server will listen at :  127.0.0.1:3000 ');

// var host = '127.0.0.1';
var port = 3000;

http
  .createServer((request, response) => {
    console.log('Port Number : 3000');

    // change the MIME type from 'text/plain' to 'text/html'
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });

    let json_respone = {
      status: 200,
      message: 'successful',
      result: ['sunday', 'monday', 'tuesday', 'wednesday'],
      code: 2000
    };
    console.log('Server Running');
    response.end(JSON.stringify(json_respone));
  })
  .listen(port);
