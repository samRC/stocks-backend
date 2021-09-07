const stocksListController = require("express").Router();

const nseStocksList = require("../../data/nse-stocks-list");

stocksListController.get("/", async (req, res) => {
  return res.json(nseStocksList);
});

module.exports = stocksListController;
