/*
 * @Author: your name
 * @Date: 2021-06-08 16:21:22
 * @LastEditTime: 2021-06-10 10:24:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myapi/__tests__/sample.test.js
 */
const supertest = require('supertest');
const app = require('../server.test');
const mongoose = require("mongoose");

test("GET /api/bubbles", async () => {

	await supertest(app)
		.get("/api/bubbles/")
		.expect(200)
		.then((response) => {
			// Check the response type and length
			expect(Array.isArray(response.body)).toBeTruthy()
			// console.log(response.body);
			// expect(response.body.length).toEqual(1)

			// Check the response data
			// expect(response.body[0]._id).toBe(post.id)
			// expect(response.body[0].title).toBe(post.title)
			// expect(response.body[0].content).toBe(post.content)
		})

})
