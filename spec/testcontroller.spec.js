const app = require('../server.js');
const supertest = require('supertest');
const agent = supertest.agent(app);
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient

describe ('GET loader.ejs:::', function(){

	it('should render the loader', function(done){
		agent
		.get('/')
		.expect('Content-Type', /html/)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
        if (err) return done.fail(err);
        done(err)
	})

	})

	it('should render an error', function(done){
		agent
		.get('/fckthsst')
		.expect('Content-Type', /html/)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(404)
		})
		.end(function(err, res){         
        if (err) return done.fail(err);
        done(err)
	})
	})
});

describe ('GET index.ejs:::', function(){

	it('should render the index.ejs', function(done){
		agent
		.get('/index')
		.expect('Content-Type', /html/)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
        if (err) return done.fail(err);
        done(err)
	})

	})

	it('should render an error', function(done){
		agent
		.get('/fckthsst')
		.expect('Content-Type', /html/)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(404)
		})
		.end(function(err, res){         
        if (err) return done.fail(err);
        done(err)
	})
	})
});

describe ('GET products.ejs:::', function(){

	it('should render the products.ejs', function(done){
		agent
		.get('/products')
		.expect('Content-Type', /html/)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(200)
		})
		.end(function(err, res){         
        if (err) return done.fail(err);
        done(err)
	})

	})

	it('should render an error', function(done){
		agent
		.get('/fckthsst')
		.expect('Content-Type', /html/)
		.expect(function (res,req) {
			expect(res.statusCode).toEqual(404)
		})
		.end(function(err, res){         
        if (err) return done.fail(err);
        done(err)
	})
	})
});