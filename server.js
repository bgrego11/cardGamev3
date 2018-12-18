const io = require('socket.io')();


let usersNum = 0;


io.on('connection', (client) => {

let addedUser = false;



client.on('gotthesocket', (a) => {
  console.log(a);
  client.emit('message', a);
})

client.on('clientEvent', function(data) {
  console.log(data);
});


  usersNum++

  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', usersNum);
    }, interval);
  });


  client.on("disconnect", () =>{ 
  usersNum--
  console.log("Client disconnected")});
});

const port = process.env.PORT || 8000;
io.listen(port);
console.log('listening on port ', port);