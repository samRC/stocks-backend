const express = require("express");
const config = require("./config");

const app = express();

app.get("/", (req, res) => {
  res.end("stocks-backend running");
});

app.listen(config.PORT, () => {
  console.log(`Server running on ${config.URL}:${config.PORT}`);
});
