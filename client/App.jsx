import React from 'react';
import axios from 'axios';
import log from 'loglevel';

import Form from './Components/Form.jsx';
import Player from './Components/Player.jsx';
import Playlist from './Components/Playlist.jsx';

import { wrapper, title, discoBall, form, player, playlist } from './style.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songID: '4kbj5MwxO1bq9wjT5g9HaA',
      artistName: '',
      trackName: '',
      playlist: [],
      inPlaylist: false,
      noAdd: false
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
        log.warn(`error getting playlist`);
        log.error(err);
      });
  }

  onChange(e) {
    this.setState({
      artistName: e.target.value
    });
  }

  //retrieve most danceable song from searched artist
  search(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/artist',
      data: {
        artistName: this.state.artistName
      }
    })
      .then(res => {
        this.setState({
          songID: res.data.id,
          trackName: res.data.trackName,
          inPlaylist: false,
          noAdd: false
        })
      })
      .catch(err => {
        log.warn(`error in axios artist request`);
        log.error(err);
      })
  }

  addToPlaylist(e) {
    e.preventDefault();
    if (this.state.inPlaylist) {
      this.setState({
        noAdd: true
      });
    } else {
      axios({
        method: 'post',
        url: '/addSong',
        data: {
          artistName: this.state.artistName,
          trackName: this.state.trackName,
          trackID: this.state.songID
        }
      })
        .then(res => {
          this.getPlaylist();
        })
        .catch(err => {
          log.warn(`error in axios addToPlaylist`);
          log.error(err);
        })
    }
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
          artistName: res.data.artistName,
          songID: res.data.trackID,
          trackName: res.data.trackName,
          inPlaylist: true
        })
      })
      .catch(err => {
        log.warn(`error in axios getSong`);
        log.error(err);
      })
  }

  render() {
    return (
      <div style={wrapper}>
        <h1 style={title} data-testid='title'>Dance Break!</h1>
        <div style={discoBall}></div>
        <div style={form}>
          <Form captureInput={this.onChange} search={this.search} />
        </div>
        <div>
          {this.state.noAdd && <h3>Song already in playlist!</h3>}
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