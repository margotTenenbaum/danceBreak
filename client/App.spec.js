import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import Player from './Components/Player.jsx';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    //screen.debug();
    expect(screen.getByText("Dance Break!")).toBeInTheDocument();
    expect(screen.getByText("Find your favorite artist's most danceable track")).toBeInTheDocument();
    expect(screen.getByText("Let's Dance")).toBeInTheDocument();
    expect(screen.getByText("Add to playlist?")).toBeInTheDocument();
  });

  test('renders Player component', () => {
    render(<Player songID='4kbj5MwxO1bq9wjT5g9HaA' />);

    expect(screen.getByTestId('player')).toHaveAttribute('src');
  });

  //test player with props

  //test playlist with props






});