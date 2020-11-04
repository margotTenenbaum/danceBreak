const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/artist', (req, res) => {
  console.log('artist received in server: ', req.body.artist);
})

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});