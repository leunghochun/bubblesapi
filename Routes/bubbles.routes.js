/*
 * @Author: your name
 * @Date: 2021-06-08 10:24:31
 * @LastEditTime: 2021-06-08 12:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myapi/Routes/bubbles.routes.js
 */

module.exports = app => {
    const bubbles = require('../Controllers/bubbles.controller');
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", bubbles.create);
  
    // Retrieve all Tutorials
    router.get("/", bubbles.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", bubbles.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", bubbles.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", bubbles.delete);
  
    // Create a new Tutorial
    router.delete("/", bubbles.deleteAll);
  
    app.use('/api/bubbles', router);
  };