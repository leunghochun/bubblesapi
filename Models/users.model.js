/*
 * @Author: joe leung
 * @Date: 2021-06-16 09:16:03
 * @LastEditTime: 2021-06-16 11:41:13
 * @LastEditors: Please set LastEditors
 * @Description: model handling on users
 * @FilePath: /myapi/Models/users.model.js
 */

module.exports = mongoose => {
    const Users = mongoose.model(
      "users",
      mongoose.Schema({
          userId: {type: String, index: true, unique: true},
          firstName : String,
          lastName : String
      },
      {timestamp: true})
    );
  
    return Users;
  };