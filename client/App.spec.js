import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App.jsx';
import Form from './Components/Form.jsx'
import Player from './Components/Player.jsx';
import Playlist from './Components/Playlist.jsx';


describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

describe('Form', () => {
  test(`calls onChange function when input is typed in form`, () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    render(<Form search={onClick} captureInput={onChange} />);

    fireEvent.change(screen.getByTestId('formInput'),
      {target: {value: 'artist'}}
    )

    expect(onClick).toHaveBeenCalledTimes(0);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test(`calls onClick function when form search button is clicked`, () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    render(<Form search={onClick} captureInput={onChange} />);

    fireEvent(screen.getByTestId('searchButton'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(0);
  });
});

describe('Player', () => {
  test('renders Player component with correct songID', () => {
    const { rerender } = render(<Player songID='4kbj5MwxO1bq9wjT5g9HaA' />);
    expect(screen.getByTestId('player')).toHaveAttribute('src', 'https://open.spotify.com/embed/track/4kbj5MwxO1bq9wjT5g9HaA');

    rerender(<Player songID='11dFghVXANMlKmJXsNCbNl' />);
    expect(screen.getByTestId('player')).toHaveAttribute('src', 'https://open.spotify.com/embed/track/11dFghVXANMlKmJXsNCbNl');
  });
});

describe('Playlist', () => {
  test('renders Playlist component with correct track information', () => {
    const onClick = jest.fn();
    const { rerender } = render(<Playlist songClick={onClick} playlist={[{ artistname: 'MGMT', trackName: 'Electric Feel' }]} />);
    expect(screen.getByTestId('playlistTrack')).toHaveAttribute('id', 'Electric Feel');

    rerender(<Playlist songClick={onClick} playlist={[{ artistname: 'Cake', trackName: 'Short Skirt/Long Jacket' }]} />);
    expect(screen.getByTestId('playlistTrack')).toHaveAttribute('id', 'Short Skirt/Long Jacket');
  });

  test(`calls onClick function when a Playlist song is clicked`, () => {
    const onClick = jest.fn();
    render(<Playlist songClick={onClick} playlist={[{ artistname: 'abcd', trackName: 'efgh' }]} />);

    fireEvent(screen.getByTestId('playlistArtist'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});