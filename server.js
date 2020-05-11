var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var port = 8080;
var players = {};
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', port);

app.use('/public', express.static(__dirname + "/public"));
server.listen(port, function(){
	console.log("I am listening !!");
});

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "landing.html"));
});

io.on('connection', function(socket){
	console.log("Someone has connected");
	players[socket.id] = {
		player_id: socket.id,
		x: 500,
		y: 500
	};
	socket.emit('actualPlayer', players);
	socket.broadcast.emit('new_player', players[socket.id]);

	socket.on('disconnect', function(){
		console.log("Someone has disconnected");
		delete players[socket.id];

		socket.broadcast.emit('player_disconnect', socket.id);
	});
});