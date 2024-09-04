const express = require("express");

const SERVER_PORT = 8080;

app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/", express.static(__dirname + "/"));

app.listen(SERVER_PORT, () => {
  console.log(`Server has started on port ${SERVER_PORT}...`);
});
