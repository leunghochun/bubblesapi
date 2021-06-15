/*
 * @Author: your name
 * @Date: 2021-06-08 09:17:20
 * @LastEditTime: 2021-06-08 14:09:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myapi/Models/bubbles.model.js
 */

/*
: Object
id: "2"
data: Object
name: "Joe"
rect: Object
x: 33
y: 426
width: 50
height: 50
top: 426
right: 83
bottom: 426
left: 33
bottom: 426
*/

module.exports = mongoose => {
    const Bubbles = mongoose.model(
      "bubbles",
      mongoose.Schema({
          id: String,
          data: {
              name: String,
              rect: {
                  x: Number,
                  y: Number,
                  width: Number,
                  height: Number,
                  top: Number,
                  right: Number,
                  left: Number,
                  bottom: Number
              }
          }
      })
    );
  
    return Bubbles;
  };