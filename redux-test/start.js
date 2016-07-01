var express = require('express');
var app = express();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

app.use('/', express.static(__dirname + '/build'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/getData', (request,response) => {
	response.set('Content-Type','application/json');
	var url = 'mongodb://188.166.189.216:37017/itim';
	MongoClient.connect(url,(err,db) => {
		if(err)	response.send('Unable to connect: ',err);
		else	db.collection('product').find({}).toArray((err,res) => {response.send(res);});
	});
});

app.listen(3000,() => console.log('listening to port 3000'));