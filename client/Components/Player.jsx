import React from 'react';
import { button } from '../style.js';

const Player = (props) => (
  <div>
    <iframe data-testid='player' src={"https://open.spotify.com/embed/track/" + props.songID} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    <button onClick={props.addToPlaylist} style={button} >Add to playlist?</button>
  </div>
)

export default Player;