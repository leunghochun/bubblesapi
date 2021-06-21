/*
 * @Author: joe leung
 * @Date: 2021-06-16 12:44:45
 * @LastEditTime: 2021-06-21 10:55:11
 * @LastEditors: Please set LastEditors
 * @Description: unit test for users model on (CRUD)
 * @FilePath: /myapi/__tests__/users.test.js
 */
const supertest = require('supertest');
const app = require('../server.test');
const mongoose = require("mongoose");
const db = require('../Models');
const Users = db.users;

// testing data
let key = '';
let userId = 'testing123';
let data = {
    userId: 'testing123',
    firstName: 'First',
    lastName: 'Last'
};

test("POST /api/users", async () => {
    await supertest(app)
        .post("/api/users/")
        .send(data)
        .expect(200)
        .then((response) => {
            // Check the response type and length
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

			console.log(response.body);
            // Check the response data
            expect(response.body.userId).toBe(data.userId);
			expect(response.body.firstName).toBe(data.firstName);
			expect(response.body.lastName).toBe(data.lastName);

            // assign the object Id to key
            key = response.body._id;
        })

})

test("GET /api/users/:userId", async () => {
	const url = `/api/users/${userId}`;
	await supertest(app)
		.get(url)
		.expect(200)
		// .send(id)
		.then((response) => {
			// Check the response type and length
			expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

			// Check the response data
			expect(response.body[0].userId).toBe(data.userId);
			expect(response.body[0].firstName).toBe(data.firstName);
			expect(response.body[0].lastName).toBe(data.lastName);
		})
})

test("PUT /api/users/:userId", async () => {
	const url = `/api/users/${userId}`;
	await supertest(app)
		.put(url)
		.expect(200)
		.send(data)
		// .send(id)
		.then((response) => {
			// Check the response type and length
			expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

            // Check the response data
			expect(response.body.userId).toBe(data.userId);
			expect(response.body.firstName).toBe(data.firstName);
			expect(response.body.lastName).toBe(data.lastName);
		})
})

test("DELETE /api/users", async () => {
	const url = `/api/users/${userId}`;
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