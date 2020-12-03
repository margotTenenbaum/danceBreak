const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helper = require('./Helpers/spotify.js');
const db = require('./database/index.js');
require('dotenv').config({
  path: path.resolve(__dirname, './.env')
});

const app = express();

app.use(morgan(process.env.ENV || 'dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/artist', (req, res) => {
  helper.searchSpotify(req.body.artistName, (results, status) => {
      res.status(status).send(results);
  })
});

app.post('/addSong', (req, res) => {
  //add escaping here to protect db
  db.saveTrack(req.body, (status) => {
    res.status(status).send();
  })
});

app.get('/getPlaylist', (req, res) => {
  db.getPlaylist((playlist, status) => {
    res.status(status).send(playlist);
  });
});

app.post('/getSong', (req, res) => {
  db.songRequest(req.body.artistName, (song, status) => {
    res.status(status).send(song);
  })
})

app.listen(process.env.PORT, function() {
  console.log(`listening on port ${process.env.PORT}!`);
});