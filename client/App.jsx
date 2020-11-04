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
      song: ''
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onComponentDidMount() {
    //get playlist
  }
  
  onChange(e) {
    this.setState({
      artist: e.target.value
    })
  }

  //retrieve most danceable song from searched artist
  search() {
    axios({
      method: 'post',
      url: '/artist',
      data: {
        artist: this.state.artist
      }
    })
    .then(res => {
      this.setState({
        songID: res.songID,
        song: res.song
      })
    })
    .catch(err => {
      console.log('error in axios artist request: ', err);
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
        <button>Add to playlist?</button>
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