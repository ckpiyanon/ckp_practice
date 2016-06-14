var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var breaking = false;
var ctime = 1500;
var elapse = true;

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/master', function(req,res) {
	res.sendFile(__dirname + '/master.html');
});

app.get('/style.css', function(req,res) {
	res.sendFile(__dirname + '/style.css');
});
io.on('connection', function(socket) {
	socket.on('time event',function(res) {
		if(res == 'start')	elapse = true;
		if(res == 'stop')	elapse = false;
		if(res == 'reset') {
			ctime = 1500;
			breaking = false;
		}
		if(res == 'skip') {
			ctime = breaking ? 1500:300;
			breaking = !breaking;
		}
		io.emit('time back',
			Math.floor(ctime / 3600),
			Math.floor((ctime % 3600) / 60),
			Math.floor(ctime % 60),
			breaking);
	});
});

http.listen(3333,function() {
	console.log('Running on port 3333');
	setInterval(function() {
		if(elapse) {
			ctime -= 1;
			if(ctime == 0) {
				ctime = breaking ? 1500:300;
				breaking = !breaking;
			}			
		}
		io.emit('time back',
			Math.floor(ctime / 3600),
			Math.floor((ctime % 3600) / 60),
			Math.floor(ctime % 60),
			breaking);
	},1000);
});