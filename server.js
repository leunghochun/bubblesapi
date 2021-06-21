/*
 * @Author: your name
 * @Date: 2021-06-08 16:52:42
 * @LastEditTime: 2021-06-17 14:53:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myapi/server.js
 */
//server.js
// const app = require("./app");

// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

const express = require("express");
const cors = require("cors");
// const routes = require("./Routes/bubbles.routes");

function createServer() {
	const app = express();
  const corsOptions = { origin: "http://localhost:8081" };

  app.use(cors(corsOptions));
  // parse requests of content-type - application/json
  app.use(express.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  require("./Routes/bubbles.routes")(app);
  require("./Routes/users.routes")(app)
  require("./Routes/messages.routes")(app)

	return app;
}


module.exports = createServer

