/*
 * @Author: joe leung
 * @Date: 2021-06-16 09:32:29
 * @LastEditTime: 2021-06-17 16:10:58
 * @LastEditors: Please set LastEditors
 * @Description: route handling for users
 * @FilePath: /myapi/Routes/users.route.js
 */

module.exports = app => {
    const users = require('../Controllers/users.controller');

    const router = require("express").Router();

    // Create a new User
    router.post("/", users.create);

    // Retrieve all users
    router.get("/", users.findAll);

    // Retrieve a single User with id
    router.get("/:userId", users.findOne);
    
    // Update a User with id
    router.put("/:userId", users.update);
    
    // Delete a User with id
    router.delete("/:userId", users.delete);
    
    app.use('/api/users', router);
};