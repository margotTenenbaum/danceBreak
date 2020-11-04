import React from 'react';
import ReactDOM from 'react-dom';

import Player from './Components/Player.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songID: '4kbj5MwxO1bq9wjT5g9HaA'
    }
  }


  render() {
    return (
      <div>
        <h1>Dance Break!</h1>
        <div>
          <h3>Find your favorite artist's most danceable track</h3>
          <input></input>
        </div>
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