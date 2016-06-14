var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var nummsg = 0;

app.get('/', function(req,res) {
	res.sendFile(__dirname + "/index.html");
});

io.on('connection', function(socket) {
	console.log("a user connected");
	socket.on('disconnect', function() {
		console.log("a user disconnected");
	});
	socket.on('chat message', function(msg) {
		io.emit('chat message','msg' + ++nummsg,msg);
	});
	socket.on('chat remove',function(id) {
		io.emit('chat remove',id);
		console.log("remove " + id);
	})
});

http.listen(3333, function() {
	console.log("Running on port 3333");
});