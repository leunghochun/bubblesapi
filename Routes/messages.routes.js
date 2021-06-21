/*
 * @Author: joe leung
 * @Date: 2021-06-16 09:32:29
 * @LastEditTime: 2021-06-17 16:42:54
 * @LastEditors: Please set LastEditors
 * @Description: route handling for messages
 * @FilePath: /myapi/Routes/messages.route.js
 */

module.exports = app => {
    const messages = require('../Controllers/messages.controller');

    const router = require("express").Router();

    // Create a new conversation
    router.post("/", messages.create);

    // Create a new message (id is conversationId)
    router.post("/:id", messages.new);

    // Retrieve all messages
    router.get("/:ownerId", messages.findAll);

    app.use('/api/messages', router);
};