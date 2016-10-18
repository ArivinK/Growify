const MongoClient = require('mongodb').MongoClient

var db;


/**
*	this function establish a connection to the database
*	@param cb
*	@return cb(err)
**/
module.exports.connect = (cb) => {
	MongoClient.connect('mongodb://jean:psss@ds017185.mlab.com:17185/grow-project', (err, database, cb) => {
		if(err){
			cb(err);
		}
		else { 
			db = database;
			cb(null);
		};
	});
}

/**
*	this function disconnects the database
*	@param cb
*	@return cb(err)
**/
module.exports.disconnect = (cb) => {
	db.close((err,cb) => {
		(err) ? cb(err) : cb(null);
	});
}

/**
*	this function checks if the database is connected
*	@param cb
*	@return cb(err)
**/
module.exports.isConnected = (cb) => {
	db.collection('stock').find().toArray((err, results) =>{
		(err) ? cb(err) : cb(null);
	})
}

/**
*	this function saves an object to a collection
*	@param collection
*	@param obj 
*	@param cb(err,res)
*	@return cb(err)
**/
module.exports.saveToDb = (collection, obj, cb) => {
	db.collection(collection).save(obj, (err, cb) => {
		(err) ? cb(err) : cb(null);
	})
}

/**
*	this function retrieves a product from a collection
*	@param cb(err,res)
*	@param collection
*	@param id 
*	@return cb(err,res{})
**/
module.exports.get = (collection, id, cb) => {
	db.collection(collection).findOne({"_id": id }).toArray((err, results) =>{
		(err) ? cb(err) : cb(null, results[0]);
	})
}

/**
*	this function retrieves all product from a collection
*	@param cb(err,res)
*	@param collection
*	@return cb(err,res[])
**/
module.exports.getAll = (collection, cb) => {
	db.collection(collection).find().toArray((err, results) =>{
		(err) ? cb(err) : cb(null, results)
	})
}

/**
*	this function manages the process when you click on “buy”
*	ex : it goes from deleting in one collection to add to another
*	/!\ temp function, may evolve in the future in multiple more specific functions like 
*	update/delete to let the controllers more power
*	@param id
*	@return callback(err)
**/
module.exports.buy = (id,cb) => {
	db.collection('stock').findOneAndDelete({_id: id},(err, result) => {
		(err) ? cb(err) : cb(null)
	})
}
