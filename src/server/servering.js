const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = module.exports.io = require('socket.io')(server, { origins: '*:*'});
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

io.on('connection', SocketManager)
console.log(io)

app.listen(PORT)


// const express = require('express');
// const cors = require('cors');
// const app = express();



// const SocketManager = require('./socketmanager')

// app.use(cors())

// app.use(express.static(__dirname + '/../../build'))

io.on('connection', SocketManager)
console.log(io)

// server.listen(PORT, ()=>{
// 	console.log("Connected to port:" + PORT);
// })

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://heroku_2x8x1pf5:77rq0ebp3pidpukjth60bu8sq1@ds115214.mlab.com:15214/heroku_2x8x1pf5', {useNewUrlParser: true});

// const Game = mongoose.model('Game', 
// {
//     blackCards: Array,
//     whiteCards: Array,
//     cards: Array,
//     players: Array,
//     names:Array,
//     dealer: String,
//     cardsinplay: Array,
//     score: Array
// }
// );

// let game = new Game({ 
//     blackCards: ["card 1","card 2"],
//     whiteCards: ["card 1","card 2"],
//     cards: ["card 1","card 2"],
//     players: ["player 1","player 2"],
//     names:["player 1","player 2"],
//     dealer: "ben",
//     cardsinplay: ["player 1","player 2"],
//     score: ["player 1","player 2"]
// });
// game.save(function (err) {
//   if (err) return handleError(err);
//   console.log("SAVED")
//   // saved!
// });
