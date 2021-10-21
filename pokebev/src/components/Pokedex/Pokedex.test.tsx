import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pokedex from './Pokedex';

describe('<Pokedex />', () => {
  test('it should mount', () => {
    render(<Pokedex />);
    
    const pokedex = screen.getByTestId('Pokedex');

    expect(pokedex).toBeInTheDocument();
  });
});