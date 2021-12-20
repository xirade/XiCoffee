const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// iteracting with the file system
const fs = require("fs");
const routes_dir = require("path").resolve(__dirname, "routes");

fs.readdirSync(routes_dir).forEach((route) => {
  try {
    app.use(require(`./routes/${route.replace(/.js/s, "")}`));
  } catch (error) {
    console.log(`Encountered Error initializing routes from ${route}`);
    console.log(error);
  }
});

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
