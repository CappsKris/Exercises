const emoji = require('node-emoji');
const http = require('http');

let heart = emoji.get("heart");
console.log(heart);

const server = http.createServer((req, res) => {
  res.write(`
  <html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    ${heart}
  </body>
  `);
  res.end();
});

server.listen(8001 );