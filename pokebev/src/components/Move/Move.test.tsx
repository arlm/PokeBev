import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Move from './Move';

describe('<Move />', () => {
  test('it should mount', () => {
    render(<Move />);
    
    const move = screen.getByTestId('Move');

    expect(move).toBeInTheDocument();
  });
});