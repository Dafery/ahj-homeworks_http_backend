const http = require('http');
const app = require('./server.complete');

const server = http.createServer(app.callback());

const port = 7070;
// слушаем определённый порт
server.listen(port, (err) => {
  if (err) {
    return console.log('Error occured:', error);
  }
  console.log(`server is listening on ${port}`);
});
