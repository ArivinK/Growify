// describe4: saved to databse
// 	it: should save to DB
// 	it: should not save if wrong collection named
// 	it: shouldn't not save if object is not correctly formated

// describe5: retrives data
// 	it: should retrive  data from DB
// 	it: should not retrive if collection wrongly named
// 	it: should recieve an object

// describe6: get everythin
// 	it: should retreive everything
// 	it: should not retreive everything if wrong collection named
// 	it: should recieve an array

//  describe7: buy process
//  	it: should delete one item 


const product = require("../models/connection");

// describe("buy", function () {
// 	var error = "tt";
// 	beforeEach(function (done) {
// 		product.connect((err, result)=>{return err}).done(function (res) {
// 			error = res;
// 			done();
// 		});
// 	});

// 	it("should be connected", function () {
// 		console.log(error);
// 		expect(error).toBeNull;
// 	});

// });

describe("establish the connection to the database", function() {
	it("should be connected", function(done) {
		product.connect((err, result)=>{});
		setTimeout(function() {
			expect(
				product.isConnected((err, result)=>{
					return err;
				})
				).toBeNull;
			done();
		}, 3000);
	});
});

describe("this get's the obj ", function() {
	it("should return the obj", function() {
		let objToSend = {
			"seller_id": "42",
			"quantity": "1",
			"price": "6"
		}
		expect(
			product.saveToDb('stock',objToSend,(err, result)=>{
				return err;
			})
			).toBeNull;
	});
});

// describe("this getAll the obj saved to DB", function() {
// 	it("should retrieve all array from DB", function() {

// 	});
// });

// describe('buy', function() {
// 	it('should return ', function() {

// 	})

// })

// describe("testing buy function", function() {
// 	it("shud return an error", function(done) {

// 		expect(
// 			product.buy(ObjectID("580789a3c2bd62429576de3f"),(err, result)=>{
// 				return "gejgdegdwehdehwehjdje";
// 			})
// 			).not.toBe(null);


// 	})

// })


// describe("buy", function () {
// 	var error;

// 	beforeEach(function (done) {
// 		product.buy(ObjectID("580789a3c2bd62429576de3f"),(err, result)=>{
// 			return "gejgdegdwehdehwehjdje";
// 		}).done(function (result) {
// 			error = result;
// 			console.log(error);
//             // Invoke the special done callback
//             done();
//         });
// 	});

// 	it("Should have returned JSON if the async call has completed", function () {
// 		expect(error).toBe("gejgdegdwehdehwehjdje");
// 	});

// });


// describe('saveToDb', function() {
// 	it('', function() {

// 	})

// })

// describe('get', function() {
// 	it('', function() {

// 	})

// })

// describe('getAll', function() {
// 	it('', function() {

// 	})

// })


// describe('disconnect', function() {
// 	it('', function() {
// 		expect(product.disconnect((err, result)=>{
// 			return err;
// 		})).tobeNull;
// 	})
// })
