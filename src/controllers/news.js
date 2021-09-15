const axios = require("axios");
var parser = require("fast-xml-parser");

const nseStocksList = require("../../data/nse-stocks-list");

const newsController = require("express").Router();

newsController.get("/:symbol", (req, res) => {
  let { symbol } = req.params;
  symbol = symbol.toUpperCase();

  axios
    .get(
      `https://news.google.com/rss/search?q=${symbol}%dwhen:7d&hl=en-IN&gl=IN&ceid=IN:en`
    )
    .then((resp) => {
      if (!nseStocksList.hasOwnProperty(symbol))
        throw new Error("Invalid Stock Symbol");
      var jsonObj = parser.parse(resp.data, {});
      // console.log("PARSED: ", Object.values(jsonObj.rss.channel.item));
      // console.log("Data", (jsonObj.rss.channel.item.map(x => x.description)))

      // Check if news was returned
      if (!jsonObj.rss.channel.item)
        throw new Error("No new news in the past few days");
      let news = jsonObj.rss.channel.item;

      // if more than one element then news is array & has length property
      // then sort in descending order of date
      if (news.length)
        news = news.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      res.json(news);
    })
    .catch((e) => {
      if (e.message.match(/invalid stock symbol/gi))
        return res.status(400).json({ error: e.message });
      else if (e.message.match(/no new news/gi))
        return res.status(404).json({ error: e.message });
      return res.status(500).json({ error: e.message });
    });
});

module.exports = newsController;
