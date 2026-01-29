const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get("/price/:symbol", async (req, res) =>{
    const symbol = req.params.symbol;
    const API_KEY = process.env.ALPHA_API_KEY;

    try {
        const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
        const response = await axios.get(url);

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock price data' });
    }
});

module.exports = router;