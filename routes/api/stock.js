const express = require('express');
const axios = require('axios');
const config = require('config');
const router = express.Router();

// @route    GET api/stock/:stocksymbol
// @desc     Get stock data from Alpha Vantage
// @access   Private

router.get('/:stocksymbol', async (req, res) => {
  try {
    const API_KEY = config.get('alphaVantageKey1')
    const uri = encodeURI(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${req.params.stocksymbol}&outputsize=compact&apikey=${API_KEY}`
    );

    const alphaVantageResponse = await axios.get(uri);
    return res.json(alphaVantageResponse.data);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: 'No Stock Data found' });
  }
});

module.exports = router;
