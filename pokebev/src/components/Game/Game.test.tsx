import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from './Game';

describe('<Game />', () => {
  test('it should mount', () => {
    render(<Game />);
    
    const game = screen.getByTestId('Game');

    expect(game).toBeInTheDocument();
  });
});