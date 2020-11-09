import React from 'react';

const Player = (props) => (
  <div>
    <iframe data-testid='player' src={"https://open.spotify.com/embed/track/" + props.songID} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
)

export default Player;