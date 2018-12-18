import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');


function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function gotthesocket(){
socket.on('message', tha => (null, tha));
socket.emit('gotthesocket')
}

function clientelle() {
socket.emit('clientEvent', "this is a custom event");
}

// function addName(cb) {
//   let userName = this.state.userName;
//   socket.on('getUser', userName => cb(null, userName));
//   socket.emit(userName)
// }
export { subscribeToTimer, gotthesocket, clientelle };