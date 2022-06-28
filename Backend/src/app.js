const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use(router);

module.exports = app;
