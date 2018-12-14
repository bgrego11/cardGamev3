// var express = require('express');
// var path = require('path');
// var app = express().use(express.static(path.join(__dirname, 'build')));
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname, 'build')
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

const io = require('socket.io')();


let usersNum = 0;

io.on('connection', (client) => {

  usersNum++

  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', usersNum);
    }, interval);
  });

  client.on('disconnect', () => {
    usersNum--
    console.log('client is disconnected');
    setInterval(() => {
      client.emit('timer', usersNum);
    }, interval);
  });


});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);