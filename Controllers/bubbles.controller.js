/*
 * @Author: your name
 * @Date: 2021-06-08 10:04:27
 * @LastEditTime: 2021-06-10 09:32:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myapi/Contollers/bubbles.controller.js
 */

const db = require('../Models');
const Bubbles = db.bubbles;

// Create and Save a new Bubbles
exports.create = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({ message: "id can not be empty!" });
        return;
    }

    // Crete a Bubble
    const bubble = new Bubbles({
        id: req.body.id,
        data: {
            name: req.body.data.name,
            rect: {
                x: req.body.data.rect.x,
                y: req.body.data.rect.y,
                width: req.body.data.rect.width,
                height: req.body.data.rect.height,
                top: req.body.data.rect.top,
                right: req.body.data.rect.right,
                left: req.body.data.rect.left,
                bottom: req.body.data.rect.bottom,
            }
        }
    });

    // Save Bubble in the database
    bubble.save(bubble)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
};

// Retrieve all Bubbles from the database.
exports.findAll = (req, res) => {
    Bubbles.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single Bubbles with an id
exports.findOne = (req, res) => {
  
};

// Update a Bubbles by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Bubbles with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Bubbles from the database.
exports.deleteAll = (req, res) => {
    Bubbles.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Bubbles were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Bubbles
exports.findAllPublished = (req, res) => {
  
};