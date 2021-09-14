const axios = require("axios");
var parser = require("fast-xml-parser");

const nseStocksList = require("../../data/nse-stocks-list");

const newsController = require("express").Router();

newsController.get("/:symbol", (req, res) => {
  let { symbol } = req.params;
  symbol = symbol.toUpperCase();

  axios
    .get(
      `https://news.google.com/rss/search?q=${symbol}%dwhen:2d&hl=en-IN&gl=IN&ceid=IN:en`
    )
    .then((resp) => {
      if (!nseStocksList.hasOwnProperty(symbol))
        throw new Error("Invalid Stock Symbol");
      var jsonObj = parser.parse(resp.data, {});
      // console.log("PARSED: ", Object.values(jsonObj.rss.channel.item));
      // console.log("Data", (jsonObj.rss.channel.item.map(x => x.description)))
      res.json(jsonObj.rss.channel.item.map((x) => x));
    })
    .catch((e) => res.status(400).json({ error: "Invalid Stock Symbol" }));
});

module.exports = newsController;
