const emoji = require('node-emoji');
const http = require('http');

let heart = emoji.get("heart");
console.log(heart);

const server = http.createServer((req, res) => {
    res.write(heart);
    res.end();
  });

server.listen(8001 );