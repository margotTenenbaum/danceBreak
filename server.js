const express = require('express');
const path = require('path');

var PORT = 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});