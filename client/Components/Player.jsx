import React from 'react';

const Player = (props) => (
  <div>
    <iframe src={"https://open.spotify.com/embed/track/" + props.songID} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
)

export default Player;