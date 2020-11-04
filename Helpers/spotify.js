const axios = require('axios');
//const db = require('../database-mongo/index.js');
const btoa = require('btoa');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

var token;
var artistID;
var artistName;

var songStorage = {
  //id: {trackName, artistName, artistID}
}


var searchSpotify = (artist, cb) => {
  var string = process.env.CLIENTID + ':' + process.env.SECRET;
  var artistName = artist;

  var encodedString = btoa(string);

  var optionsToken = {
    method: 'POST',
    json: true,
    url: 'https://accounts.spotify.com/api/token',
    'content-type': 'application/json',
    headers: {
      Authorization: 'Basic ' + encodedString,
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    },
    data: 'grant_type=client_credentials'
  }

  //call Spotify's API for access token
  axios(optionsToken)
    .then(data => {
      console.log('receiving token data');
      token = data.data.access_token;
      console.log('access token: ', token);

      var optionsArtist = {
        method: 'GET',
        url: 'https://api.spotify.com/v1/search?type=artist&q=' + artist,
        headers: {
          withCredentials: true,
          Authorization: 'Bearer ' + token
        }
      };
      //call Spotify's API for artist ID
      return axios(optionsArtist)
    })
    .then(artistId => {
      console.log('artistId: ', artistId.data.artists.items[0].id);
      artistID = artistId.data.artists.items[0].id;

      optionsTopTracks = {
        url: 'https://api.spotify.com/v1/artists/' + artistID + '/top-tracks?country=US',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }

      //call Spotify's API for artist's top tracks
      return axios(optionsTopTracks)
    })
    .then(data => {
      console.log('receiving track data');
      // var track = data.data.tracks[0].id;
      // var trackName = data.data.tracks[0].name;
      var tracks = data.data.tracks;
      console.log('top track: ', tracks[0]);

      var top5Tracks = '';
      //push 5 track ids to an array
      for (var i = 0; i < 5; i++) {
        top5Tracks+= tracks[i].id;

        if (i < 4) {
          top5Tracks+= ',';
        }

        //create track obj
        var trackObj = {
          artistName: artistName,
          artistID: tracks[i].artistID,
          trackName: tracks[i].name,
        }

        //store it in songStorage
        songStorage[tracks[i].id] = trackObj;
      }

      console.log('top5Tracks: ', top5Tracks);

      //call spotify's get audio features for several tracks api
      optionsTop5 = {
        url: 'https://api.spotify.com/v1/audio-features?ids=' + top5Tracks,
        headers: {
          Authorization: 'Bearer ' + token
        }
      }

      return axios(optionsTop5)
    })
    .then(top5 => {
      console.log('in top5: ', top5.data);
      var trackObjs = top5.data.audio_features;

      var danceability = 0;
      var index = 0;

      for (var i = 0; i < trackObjs.length; i++) {
        if (trackObjs[i].danceability > danceability) {
          danceability = trackObjs[i].danceability;
          index = i;
        }
      }


      //create a doc with the most danceable track's info

      var trackObj = {
       artistName: songStorage[trackObjs[index].id].artistName,
       artistId: songStorage[trackObjs[index].id].artistID,
       trackName: songStorage[trackObjs[index].id].trackName,
       id: trackObjs[index].id
      }

      console.log('trackObj for db: ', trackObj);
      //store track info in db
      //db.saveTrack(trackObj);


      cb(track);

    })
    .catch(err => {
      console.log('axios token err: ', err);
    })

};


module.exports.searchSpotify = searchSpotify