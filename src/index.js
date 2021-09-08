const express = require("express");
const cors = require("cors");
const app = express();

// config
const config = require("./config");

// routes
const topGainersController = require("./controllers/topGainers");
const stocksListController = require("./controllers/stocksList");
const newsController = require("./controllers/news");

// Middleware

app.use(cors());

app.get("/", (req, res) => {
  res.end("stocks-backend running");
});

app.use("/api/topgainers", topGainersController);
app.use("/api/stockslist", stocksListController);
app.use("/api/news", newsController);

app.listen(config.PORT, () => {
  console.log(`Server running on ${config.URL}:${config.PORT}`);
});
