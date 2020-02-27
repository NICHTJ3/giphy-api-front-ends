const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
require('dotenv').config();

const app = express();

const API_URL = 'https://api.giphy.com/v1/gifs/search';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/search/:searchTerm', (req, res) => {
  const url = `${API_URL}?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.searchTerm}`;
  console.log(url);
  request(url).pipe(res);
});

module.exports = app;
