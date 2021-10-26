import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Games from './Games';

describe('<Games />', () => {
  test('it should mount', () => {
    render(<Games />);

    const games = screen.getByTestId('Games');

    expect(games).toBeInTheDocument();
  });
});