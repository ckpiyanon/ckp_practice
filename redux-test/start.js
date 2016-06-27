var express = require('express');
var app = express();
app.get('/',(req,res) => res.sendFile(__dirname + '/src/index.html'));
app.get('/index.js',(req,res) => res.sendFile(__dirname + '/index.js'));
app.listen(3000,() => console.log('listening to port 3000'));