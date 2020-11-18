import React from 'react';
import axios from 'axios';

import Form from './Components/Form.jsx';
import Player from './Components/Player.jsx';
import Playlist from './Components/Playlist.jsx';

import { wrapper, title, discoBall, form, player, playlist } from './style.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songID: '4kbj5MwxO1bq9wjT5g9HaA',
      artist: '',
      songTitle: '',
      playlist: []
    }

    this.getPlaylist = this.getPlaylist.bind(this);
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.addToPlaylist = this.addToPlaylist.bind(this);
    this.songClick = this.songClick.bind(this);
  }

  componentDidMount() {
    this.getPlaylist();
  }

  getPlaylist() {
    axios({
      method: 'get',
      url: '/getPlaylist'
    })
      .then(res => {
        this.setState({
          playlist: res.data
        });
      })
      .catch(err => {
        console.log('err getting playlist: ', err);
      });
  }

  onChange(e) {
    this.setState({
      artist: e.target.value
    });
  }

  //retrieve most danceable song from searched artist
  search(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/artist',
      data: {
        artist: this.state.artist
      }
    })
      .then(res => {
        this.setState({
          songID: res.data.id,
          songTitle: res.data.trackName
        })
      })
      .catch(err => {
        console.log('error in axios artist request: ', err);
      })
  }

  addToPlaylist(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/addSong',
      data: {
        artistName: this.state.artist,
        trackName: this.state.songTitle,
        trackID: this.state.songID
      }
    })
      .then(res => {
        this.getPlaylist();
      })
      .catch(err => {
        console.log('error in axios addToPlaylist: ', err);
      })
  }

  songClick(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/getSong',
      data: {
        artistName: e.target.id
      }
    })
      .then(res => {
        this.setState({
          artist: res.data.artistName,
          songID: res.data.trackID,
          songTitle: res.data.trackName
        })
      })
      .catch(err => {
        console.log('err in axios getSong: ', err);
      })
  }

  render() {
    return (
      <div style={wrapper}>
        <h1 style={title}>Dance Break!</h1>
        <div style={discoBall}></div>
        <div style={form}>
        <Form captureInput={this.onChange} search={this.search} />
        </div>
        <div>
          <Player songID={this.state.songID} addToPlaylist={this.addToPlaylist} style={player} />
        </div>
        <div style={playlist}>
          <Playlist playlist={this.state.playlist} songClick={this.songClick} />
        </div>
      </div>
    )
  }
}

export default App;