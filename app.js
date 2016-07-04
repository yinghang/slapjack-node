"use strict";

// ------------------------------------\\
// Built with <3 by Cole & YH          \\
// ------------------------------------\\

var path = require('path');
var morgan = require('morgan');
var path = require('path');
var express = require('express');
var pug = require('pug');
var exphbs  = require('express-handlebars');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('underscore');

// ------------------------------------\\
// Switching out hbs for jade/pug      \\
// ------------------------------------\\
// app.engine('hbs', exphbs({
//   extname: 'hbs',
//   defaultLayout: 'main'
// }));
// app.set('view engine', 'hbs');

// ------------------------------------\\
// pug app engine                      \\
// ------------------------------------\\
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined'));


app.get('/', function(req, res) {
  res.render('index', {title:'TEST', message:'TEST!'});
});

// Here is your new Game!
var Game = require('./game');
var game = new Game();
game.slapped = false

function getGameState(){
  var numCards = {};
  var currentPlayerUsername;
  var players = "";

  numCards = _.mapObject(game.players, (function(player, playerId){
    if(playerId == game.currentPlayer){
      currentPlayerUsername = player.username;
    }
    players += player.username + ", ";
    return player.pile.length;
  }));
  console.log(numCards)
  if (currentPlayerUsername) currentPlayerUsername += '\'s turn'
  return {
    handSize: numCards || "You ain't got no cards yet!",
    current: currentPlayerUsername || "Game has not started yet!",
    playersInGame: players,
    pileSize: game.pile.length,
  }
}

io.on('connection', function(socket){
  
  
  socket.emit('username', false);
  // Try to add a player to the game. 
  // If you can't, emit('username', false), return out of callback
  // If you successfully add the player, emit ('username', id)
  socket.on('username', function(data) {
    try {
      var id = game.addPlayer(data)
    } catch (e) {
      socket.emit('username', false)
      return;
    }
    socket.playerId = id;
    socket.emit('username',id);
    socket.emit('updateGame', getGameState());
    socket.broadcast.emit('updateGame', getGameState());
  });


  // Start the game & broadcast to entire socket 
  socket.on('start', function() {
    try {
      game.startGame()
    } catch (e) {
      socket.emit('Cannot start game yet, not enough players!')
      return
    }
    var msg = {
      current: game.players[game.currentPlayer].username,
      pileSize: 0
    }
    socket.broadcast.emit('start', msg)
    socket.emit('start', {
      gameState: getGameState(),
    });

    socket.broadcast.emit('start', {
      gameState: getGameState()
    });
  });
  
  
  // call game.playCard, emit the result the broadcast it 
  socket.on('playCard', function() {
    game.slapped = false
    console.log('card play attempted')
    try {
      game.playCard(socket.playerId)
    } catch(e) {
      socket.emit('message', 'Not your turn yet!')
      return
    }
    socket.emit('playCard', {
      card: game.pile.slice(-1),
      gameState: getGameState()
    });
    socket.broadcast.emit('playCard', {
      card: game.pile.slice(-1),
      gameState: getGameState()
    });
  });

  // Try to slap! Emit, broadcast, and handle errors accordingly 
  socket.on('slap', function() {
    if (game.slapped) {return}
    console.log('*****first slap!')
    console.log(Math.random())
    try {
      var result = game.slap(socket.playerId)
    } catch(e) {
      socket.emit('message',e)
      return
    }
    game.slapped = true
    console.log(result)
    console.log(result.message)
    socket.emit('slap',result)
    if (result.winning) {
      socket.broadcast.emit('message',game.players[socket.playerId].username+' just won the game!')  
    }
    else {
      socket.broadcast.emit('message',game.players[socket.playerId].username+' just'+result.message)
    }
  });

});

var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('Express started. Listening on %s', port);
});
