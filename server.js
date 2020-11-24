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

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/artist', (req, res) => {
  helper.searchSpotify(req.body.artist, (results) => {
    res.send(results);
  })
});

app.post('/addSong', (req, res) => {
  db.saveTrack(req.body, (status) => {
    res.status(status).send();
  })
});

app.get('/getPlaylist', (req, res) => {
  db.getPlaylist((playlist, status) => {
    if (status === 500) {
      res.status(status).send();
    } else {
      res.send(playlist);
    }

  });
});

app.post('/getSong', (req, res) => {
  db.songRequest(req.body.artistName, (song, status) => {
    if (status === 500) {
      res.status(status).send();
    } else {
      res.send(song);
    }
  })
})

app.listen(process.env.PORT, function() {
  console.log(`listening on port ${process.env.PORT}!`);
});