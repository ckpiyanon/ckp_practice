var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://188.166.189.216:37017/itim';

	MongoClient.connect(url,(err,db) => {
		if(err)	console.log('Unable to connect: ',err);
		else {
			var collection = db.collection('product');
			collection.find({}).toArray((err,res) => {
				console.log(res);
			});
		}
	});