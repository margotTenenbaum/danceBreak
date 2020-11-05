import React from 'react';

const Playlist = (props) => (
  <div>
    <table>
      <thead>
        <tr>
          <td>Artist Name</td>
          <td>Track Name</td>
        </tr>
      </thead>
      <tbody>
        {props.playlist.map(song => {
          return <tr>
            <td id={song.artistName} onClick={props.songClick}>{song.artistName}</td>
            <td>{song.trackName}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
)

export default Playlist;