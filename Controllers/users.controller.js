/*
 * @Author: joe leung
 * @Date: 2021-06-16 09:35:40
 * @LastEditTime: 2021-06-16 14:45:52
 * @LastEditors: Please set LastEditors
 * @Description: Controller to handle all processes between api & database for users
 * @FilePath: /myapi/Controllers/users.controller.js
 */

// Create and Save a new user
const db = require('../Models');
const Users = db.users;

// Create and Save a new User
exports.create = (req, res) => {
    if (!req.body.userId) {
        res.status(400).send({ message: "userId can not be empty!" });
        return;
    }

    // Create a User
    const user = new Users({
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName : req.body.lastName
    });

    // Save User in the database
    user.save(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
    });
}

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    Users.find({})
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

// Find a single user with an userId
exports.findOne = (req, res) => {
    if (!req.params.userId) {
        res.status(400).send({ message: "userId can not be empty!" });
        return;
    }
    Users.find({userId: req.params.userId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    });
};

// Delete a user by the userId in the request
exports.delete = (req, res) => {
    if (!req.params.userId) {
        res.status(400).send({ message: "userId can not be empty!" });
        return;
    }
    
    // const id = req.params.userId;
    const filter = {userId: req.params.userId};

    Users.findOneAndDelete(filter)
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update user with userId=${req.params.userId}. Maybe user was not found!`
            });
        } else {
            res.send({ message: "User was updated successfully." });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating user with userId=" +req.params.userId
        });
    });
};

// Update a user by the userId in the request
exports.update = (req, res) => {
    if (!req.params.userId) {
        res.status(400).send({ message: "userId can not be empty!" });
        return;
    }
    
    // const id = req.params.userId;
    const filter = {userId: req.params.userId};
    const update = req.body;

    Users.findOneAndUpdate(filter, update, {new: true})
    .then(data => {
        res.send(data);
        // if (!data) {
        //     res.status(404).send({
        //         message: `Cannot update user with userId=${req.params.userId}. Maybe user was not found!`
        //     });
        // } else {
        //     console.log(data)
        //     res.send({ message: "User was update successfully." });
        // }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating user with userId=" +req.params.userId
        });
    });
};