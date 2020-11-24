const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playlist');

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const trackSchema = mongoose.Schema({
  artistName: String,
  trackName: String,
  trackID: String
});

const Track = mongoose.model('Track', trackSchema);

const saveTrack = (track, next) => {
  const newTrack = new Track({
    artistName: track.artistName,
    trackName: track.trackName,
    trackID: track.trackID
  })

  newTrack.save((err) => {
    if (err) {
      console.log('error saving track to db: ', err);
      next(500)
    } else {
      next(201);
    }
  })
};

const getPlaylist = function(next) {
  Track.find({}, function(err, items) {
    if(err) {
      console.log('error getting playlist from db: ', err);
      next(null, 500);
    } else {
      next(items, 200);
    }
  });
};

const songRequest = (artist, next) => {
  Track.find({artistName: artist}, (err, song) => {
    if (err) {
      console.log('error getting song from db: ', err);
      next(null, 500);
    } else {
      next(song[0], 200);
    }
  })
}

module.exports.getPlaylist = getPlaylist;
module.exports.saveTrack = saveTrack;
module.exports.songRequest = songRequest;