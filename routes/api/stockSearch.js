const express = require('express');
const axios = require('axios');
const config = require('config');
const router = express.Router();

// @route    GET api/ticker/:stocksymbol/overview
// @desc     Get stock ticker from Alpha Vantage
// @access   Private

router.get('/:searchTerm', async (req, res) => {
    try {
        const API_KEY = config.get('alphaVantageKey3')
        const uri = encodeURI(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${req.params.searchTerm}&apikey=${API_KEY}`
        );

        const alphaVantageResponse = await axios.get(uri);
        return res.json(alphaVantageResponse.data);
    } catch (err) {
        console.error(err.message);
        return res.status(404).json({ msg: 'No Stock Data found' });
    }
});

module.exports = router;
