import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pokemon from './Pokemon';

describe('<Pokemon />', () => {
  test('it should mount', () => {
    render(<Pokemon />);
    
    const pokemon = screen.getByTestId('Pokemon');

    expect(pokemon).toBeInTheDocument();
  });
});