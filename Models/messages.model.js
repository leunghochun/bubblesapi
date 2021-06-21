/*
 * @Author: joe leung
 * @Date: 2021-06-08 09:17:20
 * @LastEditTime: 2021-06-17 17:21:17
 * @LastEditors: Please set LastEditors
 * @Description: create a model for message data
 * @FilePath: /myapi/Models/messages.model.js
 */

module.exports = mongoose => {
    const Messages = mongoose.model(
      "messages",
      mongoose.Schema({
          ownerId: {type: String, index: true, unique: true},
          conversation: [ {
            senderId: { type: String, required: true },
            content: String,
            messageTime: {type: Date, default: Date.now}
          }],
          createAt: {type: Date, default: Date.now}
      })
    )
    return Messages;
  };