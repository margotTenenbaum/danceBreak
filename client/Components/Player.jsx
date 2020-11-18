import React from 'react';
import { button, center } from '../style.js';

const Player = (props) => (
  <div style={center}>
    <div>
      <iframe data-testid='player' src={"https://open.spotify.com/embed/track/" + props.songID} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    <div>
      <button onClick={props.addToPlaylist} style={button} >Add to playlist?</button>
    </div>
  </div>
)

export default Player;