import React from 'react';
import { table, th, td, tdArtist } from '../style.js';

const Playlist = (props) => (
  <div>
    <table style={table}>
      <thead>
        <tr>
          <th style={th}>Artist Name</th>
          <th style={th}>Track Name</th>
        </tr>
      </thead>
      <tbody>
        {props.playlist.map(song => {
          return <tr>
            <td style={tdArtist} data-testid='playlistArtist' id={song.artistName} onClick={props.songClick}>{song.artistName}</td>
            <td style={td} data-testid='playlistTrack' id={song.trackName}>{song.trackName}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
)

export default Playlist;