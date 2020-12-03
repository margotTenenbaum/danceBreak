import React from 'react';
import { table, center, th, td, tdArtist } from '../style.js';

const Playlist = (props) => (
  <div>
    <table style={table}>
      <thead>
        <tr>
          <th style={th}>Artist</th>
          <th style={th}>Track</th>
        </tr>
      </thead>
      <tbody>
        {props.playlist.map(song => {
          return <tr key={song.artistName}>
            <td style={tdArtist} data-testid='playlistArtist' id={song.artistName} onClick={props.songClick}>{song.artistName}</td>
            <td style={td} data-testid='playlistTrack' id={song.trackName}>{song.trackName}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
)

export default Playlist;