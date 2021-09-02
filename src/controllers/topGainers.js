const axios = require("axios");
const topGainersController = require("express").Router();

topGainersController.get("/", async (req, res) => {
  try {
    const topGainersJSON = await axios.get(
      "https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json"
    );
    // Already a JS Object, no need to parse
    // const topGainers = JSON.parse(topGainersJSON);

    // console.log(topGainersJSON.data.data.map((x) => x.symbol));

    const topGainers = topGainersJSON.data.data.map((x) => ({
      series: x.series,
      symbol: x.symbol,
      percentChange: x.netPrice,
      lastTradedPrice: x.ltp,
      volume: x.tradedQuantity,
    }));
    res.json(topGainers);
  } catch (e) {
    console.log(e);
  }
});

module.exports = topGainersController;
