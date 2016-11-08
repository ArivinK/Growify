// describe1 : connect
// 	it : (should connect to database)



// describe2 : disconnect
// 	it: should disconnect 

// describe3: isConnected
// 	it: is Connected


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

describe('check require access', function() {
	it('should accss the ', function() {
		expect(product.sayHello()).toBe("hello world");
	})
})

describe("establishing the connection to the database", function() {
	it("should be connected", function(done) {
		product.connect((err, result)=>{});
		setTimeout(function() {
			expect(
				product.isConnected((err, result)=>{
					return err;
				})
				).toBeNull;
			done();
		}, 1000);
	});
});




// })

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

// describe('buy', function() {
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
