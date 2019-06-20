const https = require('https')
const io = require('socket.io')(https);
const handleInput = require('./src/core/handleInput');

let _display = {
  output: '',
  inputArray: []
}

io.on('connection', (client) => {
  console.log('User conntected');
  client.on("Hello", () => {
    console.log("Hello, world!")
  });

  client.on("sendInput", (value) => {
    _display = handleInput(_display, value);
    console.log(_display);
    client.broadcast.emit("setOutput", _display); // Send to everyone connected, excluding client who emitted
  });

  client.on("getOutput", () => {
    client.emit("setOutput", _display); // Send back to caller
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

