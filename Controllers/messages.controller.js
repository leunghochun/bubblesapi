/*
 * @Author: joe leung
 * @Date: 2021-06-15 16:56:27
 * @LastEditTime: 2021-06-17 17:48:38
 * @LastEditors: Please set LastEditors
 * @Description: Controller to handle all processes between api & database for messages
 * @FilePath: /myapi/Controllers/messages.controller.js
 */

const db = require('../Models');
const Messages = db.messages;

// Create and Save a new message
exports.create = (req, res) => {
    if (!req.body.ownerId || !req.body.conversation) {
        res.status(400).send({ message: "ownerId or conversation can not be empty!" });
        return;
    }

    // Create a message
    const message = new Messages({
        ownerId: req.body.ownerId,
        conversation: req.body.conversation
    });

    // Save message in the database
    message.save(message)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the message."
        });
    });
}

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  if (!req.params.ownerId) { 
    res.status(400).send({ message: "ownerId or conversation can not be empty!" });
    return;
  }

  Messages.find({ownerId: req.params.ownerId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};


// Find a single conversation with an id
exports.new= (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: "id can not be empty!" });
    return;
  }

  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;
  const update = {$push: {"conversation": { senderId: req.body.senderId, content: req.body.content} }}

  Messages.findByIdAndUpdate(id, update, {new: true, runValidators: true, safe: true, upsert: true})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving bubbles."
    });
  });
};