const { default: axios } = require('axios');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.all('/bot*', async (req, res) => {
  const response = await axios({
    baseURL: 'https://api.telegram.org/',
    url: req.path,
    method: req.method,
    headers: { ...req.headers, host: 'api.telegram.org' },
    data: req.body,
    params: req.query,
    validateStatus: () => true,
  });

  res.set(response.headers).status(response.status).json(response.data);
});

module.exports = app;
