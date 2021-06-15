/*
 * @Author: your name
 * @Date: 2021-06-08 16:21:22
 * @LastEditTime: 2021-06-15 14:51:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myapi/__tests__/sample.test.js
 */
const supertest = require('supertest');
const app = require('../server.test');
const mongoose = require("mongoose");
const db = require('../Models/');
const Bubbles = db.bubbles;

// testing data
let key = '';
let data = {
	"data": {
	  "rect": {
		"x": 33,
		"y": 426,
		"width": 50,
		"height": 50,
		"top": 426,
		"right": 83,
		"left": 33,
		"bottom": 426
	  },
	  "name": "testing2"
	},
	"id": "2",
};

test("POST /api/bubbles", async () => {
	await supertest(app)
		.post("/api/bubbles/")
		.send(data)
		.expect(200)
		.then((response) => {
			// Check the response type and length
			expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

			// Check the response data
			expect(response.body.id).toBe(data.id);
			expect(response.body.name).toBe(data.name);

			key = response.body._id;
		})

})

test("GET /api/bubbles/:id", async () => {
	const url = `/api/bubbles/${key}`;
	await supertest(app)
		.get(url)
		.expect(200)
		// .send(id)
		.then((response) => {
			// Check the response type and length
			expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

			// Check the response data
			expect(response.body._id).toBe(key);
			expect(response.body.id).toBe(data.id);
			expect(response.body.name).toBe(data.name);
		})
})

test("PUT /api/bubbles/:id", async () => {
	data.data.name = 'testing_123_for_put';
	const url = `/api/bubbles/${key}`;
	await supertest(app)
		.put(url)
		.expect(200)
		.send(data)
		// .send(id)
		.then((response) => {
			// Check the response type and length
			expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

			// Check the response data
			expect(response.body.message).toContain('successfully');
		})
})

test("GET ALL /api/bubbles", async () => {
	await supertest(app)
		.get("/api/bubbles/")
		.expect(200)
		.send(data)
		.then((response) => {
			// Check the response type and length
			expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
			expect(Array.isArray(response.body)).toBeTruthy()
			expect(response.body.length).toBeGreaterThan(0)

			// Check the response data
			// expect(response.body[0].id).toBe(data.id);
			// expect(response.body[0].name).toBe(data.name);
		})
})

test("GET after PUT /api/bubbles/:id", async () => {
	const url = `/api/bubbles/${key}`;
	await supertest(app)
		.get(url)
		.expect(200)
		// .send(id)
		.then((response) => {
			// Check the response type and length
			expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

			// Check the response data
			expect(response.body._id).toBe(key);
			expect(response.body.id).toBe(data.id);
			expect(response.body.name).toBe(data.name);
		})
})

test("DELETE /api/bubbles", async () => {
	const url = `/api/bubbles/${key}`;
	await supertest(app)
		.delete(url)
		.expect(200)
		.then((response) => {
			// Check the response type and length
			expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

			// Check the response data
			expect(response.body.message).toContain('successfully');
		})
})

test("DELETE /api/bubbles", async () => {
	await supertest(app)
		.delete("/api/bubbles/")
		.expect(200)
		.then((response) => {
			// Check the response type and length
			expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

			// Check the response data
			expect(response.body.message).toContain('successfully');
		})
})