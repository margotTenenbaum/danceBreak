const axios = require('axios');
const btoa = require('btoa');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

var token;
var artistID;
var artistName;
var songStorage = {
  //id: {artistName, artistID, trackName}
}

var searchSpotify = (artist, next) => {
  const string = process.env.CLIENTID + ':' + process.env.SECRET;
  artistName = artist;

  const encodedString = btoa(string);

  const optionsToken = {
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
      console.log('spotify token received');
      token = data.data.access_token;

      const optionsArtist = {
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
      artistID = artistId.data.artists.items[0].id;

      const optionsTopTracks = {
        url: 'https://api.spotify.com/v1/artists/' + artistID + '/top-tracks?country=US',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }

      //call Spotify's API for artist's top tracks
      return axios(optionsTopTracks)
    })
    .then(data => {
      var tracks = data.data.tracks;

      var top5Tracks = '';

      for (var i = 0; i < 5; i++) {
        top5Tracks+= tracks[i].id;

        if (i < 4) {
          top5Tracks+= ',';
        }

        var trackObj = {
          artistName: artistName,
          artistID: tracks[i].artistID,
          trackName: tracks[i].name,
        }

        songStorage[tracks[i].id] = trackObj;
      }

      //call spotify's 'get audio features for several tracks' api
      optionsTop5 = {
        url: 'https://api.spotify.com/v1/audio-features?ids=' + top5Tracks,
        headers: {
          Authorization: 'Bearer ' + token
        }
      }

      return axios(optionsTop5)
    })
    .then(top5 => {
      const trackObjs = top5.data.audio_features;

      var danceability = 0;
      var index = 0;

      for (var i = 0; i < trackObjs.length; i++) { //forEach
        if (trackObjs[i].danceability > danceability) {
          danceability = trackObjs[i].danceability;
          index = i;
        }
      }

      //use lodash.get will never error, allows default, otherwise error will be innacurate in catch

      const trackObj = {
       artistName: songStorage[trackObjs[index].id].artistName, //too deeply nested
       trackName: songStorage[trackObjs[index].id].trackName,
       id: trackObjs[index].id
      }

      next(200, trackObj);

    })
    .catch(err => {
      console.log('axios token err: ', err); //use morgan here
      next(500, null);
    })
};

module.exports.searchSpotify = searchSpotify