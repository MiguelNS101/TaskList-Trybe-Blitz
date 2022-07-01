const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use(router);

module.exports = app;
