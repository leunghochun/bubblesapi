/*
 * @Author: your name
 * @Date: 2021-06-07 16:36:38
 * @LastEditTime: 2021-06-15 16:10:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myapi/app.js
 */

const express = require("express")
const mongoose = require("mongoose")
const createServer = require("./server") // new
const app = createServer() // new
const db = require('./Models');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  module.exports = app;