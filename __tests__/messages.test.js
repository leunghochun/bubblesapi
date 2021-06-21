/*
 * @Author: joe leung
 * @Date: 2021-06-17 14:17:29
 * @LastEditTime: 2021-06-17 17:52:39
 * @LastEditors: Please set LastEditors
 * @Description: unit test for messages model on (CRUD)
 * @FilePath: /myapi/__tests__/messages.test.js
 */
const supertest = require('supertest');
const app = require('../server.test');
const mongoose = require("mongoose");
const db = require('../Models');
const Messages  = db.messages;

// testing data
let key = '';
let ownerId = 'testing111';

test("POST /api/messages", async () => {
    let data = {
        "ownerId":ownerId,
        "conversation":[
           {
              "senderId":"testing111",
              "content":"Hi 123"
           }
        ]
    }
    await supertest(app)
        .post("/api/messages/")
        .send(data)
        .expect(200)
        .then((response) => {
            // Check the response type and length
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

            // Check the response data
            expect(response.body.ownerId).toBe(ownerId);

            // assign the object Id to key
            key = response.body._id;
        })
})

test("POST /api/messages/:id", async () => {
    let data = {
        "senderId":"testing111",
        "content":"Hi 1234"
    }
    await supertest(app)
        .post(`/api/messages/${key}`)
        .send(data)
        .expect(200)
        .then((response) => {
            // Check the response type and length
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

            // Check the response data
            expect(response.body.ownerId).toBe(ownerId);
            expect(response.body._id).toBe(key);

        })
})

test("POST /api/messages/:id", async () => {
    let data = {
        "content":"Hi 1234"
    }
    await supertest(app)
        .post(`/api/messages/${key}`)
        .send(data)
        .expect(500)
        .then((response) => {
            // Check the response type and length
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));

            // Check the response data
            // expect(response.body.ownerId).toBe(ownerId);
            // expect(response.body._id).toBe(key);

        })
})

test("GET /api/messages/:id", async () => {
    await supertest(app)
        .get(`/api/messages/${ownerId}`)
        .expect(200)
        .then((response) => {
            // Check the response type and length
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
            expect(Array.isArray(response.body)).toBeTruthy()
			expect(response.body.length).toBeGreaterThan(0)
        })
})