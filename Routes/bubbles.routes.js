/*
 * @Author: joe leung
 * @Date: 2021-06-08 10:24:31
 * @LastEditTime: 2021-06-16 11:53:53
 * @LastEditors: Please set LastEditors
 * @Description: route handling on bubbles 
 * @FilePath: /myapi/Routes/bubbles.routes.js
 */

module.exports = app => {
    const bubbles = require('../Controllers/bubbles.controller');
  
    const router = require("express").Router();
  
    // Create a new Bubble
    router.post("/", bubbles.create);
  
    // Retrieve all Bubbles
    router.get("/", bubbles.findAll);
  
    // Retrieve a single Bubble with id
    router.get("/:id", bubbles.findOne);
  
    // Update a Bubble with id
    router.put("/:id", bubbles.update);
  
    // Delete a Bubble with id
    router.delete("/:id", bubbles.delete);
  
    // Delete all Bubbles
    router.delete("/", bubbles.deleteAll);
  
    app.use('/api/bubbles', router);
  };