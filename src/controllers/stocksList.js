const stocksListController = require("express").Router();

const nseStocksList = require("../../data/nse-stocks-list");
const nifty50StocksList = require("../../data/nifty50-stocks-list");

stocksListController.get("/", async (req, res) => {
  return res.json(nseStocksList);
});

stocksListController.get("/nifty50", async (req, res) => {
  const stocksObj = {};
  nifty50StocksList.nifty50.forEach((s) => {
    stocksObj[s] = nseStocksList[s];
  });
  return res.json(stocksObj);
});

module.exports = stocksListController;
