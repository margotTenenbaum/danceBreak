const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helper = require('./Helpers/spotify.js');
const db = require('./database/index.js');

const PORT = 3000;

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
  db.saveTrack(req.body, () => {
    res.status(201);
  })
});

app.get('/getPlaylist', (req, res) => {
  db.getPlaylist((playlist) => {
    res.send(playlist);
  });
});

app.post('/getSong', (req, res) => {
  db.songRequest(req.body.artistName, (song) => {
    res.send(song);
  })
})

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});