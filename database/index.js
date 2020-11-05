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

var lastSavedId;

const songRequest = (cb) => {
  cb(lastSavedId);
}

const saveTrack = (track) => {
  const newTrack = new Track({
    artistName: track.artistName,
    trackName: track.trackName,
    trackID: track.id
  })

  lastSavedId = track.id;

  newTrack.save((err, doc) => {
    if (err) {
      console.log('error saving track to db: ', err);
    } else {
      console.log('track saved to db');
    }
  })
};


const getPlaylist = function(cb) {
  Track.find({}, function(err, items) {
    if(err) {
      cb(err, null);
    } else {
      cb(null, items);
    }
  });
};

module.exports.getPlaylist = getPlaylist;
module.exports.saveTrack = saveTrack;
module.exports.requestedSong = lastSavedId;
module.exports.songRequest = songRequest;