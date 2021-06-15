/*
 * @Author: your name
 * @Date: 2021-06-08 09:14:41
 * @LastEditTime: 2021-06-08 09:37:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myapi/Models/index.js
 */
const dbConfig = require("../Config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.bubbles = require("./bubbles.model.js")(mongoose);

module.exports = db;
