/*
 * @Author: your name
 * @Date: 2021-06-07 18:26:21
 * @LastEditTime: 2021-06-07 18:29:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myapi/Models/mongo.js
 */

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.101op.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
