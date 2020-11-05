import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Player from './Components/Player.jsx';
//import Playlist from './Components/Playlist.jsx';

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
      console.log('playlist: ', res.data);
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
      //call get playlist?
      console.log('back in react');
    })
    .catch(err => {
      console.log('error in axios addToPlaylist: ', err);
    })
  }

  render() {
    return (
      <div>
        <h1>Dance Break!</h1>
        <div>
          <h3>Find your favorite artist's most danceable track</h3>
          <form id='artist'>
          <input type='text' id='artistInput' onChange={this.onChange}></input>
          <button form='artist' onClick={this.search}>Let's Dance</button>
          </form>
        </div>
        <button onClick={this.addToPlaylist}>Add to playlist?</button>
        <div>
          <Player songID={this.state.songID}/>
        </div>
        {/* <div>
          <Playlist />
        </div> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));