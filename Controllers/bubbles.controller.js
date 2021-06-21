/*
 * @Author: joe leung
 * @Date: 2021-06-08 10:04:27
 * @LastEditTime: 2021-06-17 17:46:25
 * @LastEditors: Please set LastEditors
 * @Description: Controller to handle all processes between api & database bubbles
 * @FilePath: /myapi/Contollers/bubbles.controller.js
 */

const db = require('../Models');
const Bubbles = db.bubbles;
const ObjectId = require('mongodb').ObjectID;

// Create and Save a new Bubble
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
            err.message || "Some error occurred while creating the bubble."
        });
    });
};

// Retrieve all Bubbles from the database.
exports.findAll = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({ message: "id can not be empty!" });
        return;
    }

    Bubbles.find({id: req.body.id})
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

// Find a single Bubbles with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Bubbles.findById(ObjectId(id))
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

// Update a Bubbles by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    Bubbles.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update bubble with id=${id}. Maybe bubble was not found!`
            });
        } else {
            res.send({ message: "Bubble was updated successfully." });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating bubble with id=" + id
        });
    });
};

// Delete a Bubbles with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    // Bubbles.findByIdAndRemove(ObjectId(id))
    Bubbles.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete bubble with id=${id}. Maybe bubble was not found!`
          });
        } else {
          res.send({
            message: "Bubble was deleted successfully!"
          });
        }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bubbles."
      });
    });
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
          err.message || "Some error occurred while removing all bubbles."
      });
    });
};