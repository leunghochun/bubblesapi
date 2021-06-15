/*
 * @Author: your name
 * @Date: 2021-06-08 17:39:43
 * @LastEditTime: 2021-06-15 11:50:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myapi/server.test.js
 */

const createServer = require("./server");
const app = createServer() // new

// const mongoose = require("mongoose");
const dbConfig = require("./Config/db.config");
const db = require('./Models');

beforeAll((done) => {
	db.mongoose.connect(
		dbConfig.url, { 
			useNewUrlParser: true, 
			useUnifiedTopology: true 
	})
	.then(() => {
		console.log("Connected to the database!");
		const PORT = process.env.PORT || 8080;
		app.listen(PORT, () => {
		  console.log(`Server is running on port ${PORT}.`);
		});
		done();
	})
	.catch(err => {
		console.log("Cannot connect to the database!", err);
		process.exit();
	});
})

afterAll((done) => {
	db.mongoose.connection.db.dropDatabase(() => {
		db.mongoose.connection.close(() => done())
	})
})

// const app = createServer()
module.exports = app;