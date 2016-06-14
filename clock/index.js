var app = require('express')();
var http = require('http').Server(app);
var io.require('socket.io')(http);
var breaking = false;
var ctime = 1500;

setInterval(1000,function() {
	ctime -= 1;
	if(ctime == 0) {
		ctime = breaking ? 300:1500;
		breaking = !breaking;
	}
	io.emit('time back',ctime);
});

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('a user connected');
	socket.on('disconnected', function() {
		console.log('a user disconnected');
	});
});

http.listen(3333,function() {
	console.log('Running on port 3333');
});