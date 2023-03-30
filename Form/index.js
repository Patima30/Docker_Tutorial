'use strict';

const express = require('express');

// Constants
const PORT = 8082;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.listen(PORT,  () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});