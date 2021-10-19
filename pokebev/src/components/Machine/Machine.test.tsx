import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Machine from './Machine';

describe('<Machine />', () => {
  test('it should mount', () => {
    render(<Machine />);
    
    const machine = screen.getByTestId('Machine');

    expect(machine).toBeInTheDocument();
  });
});