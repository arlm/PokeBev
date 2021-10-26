import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pokedexes from './Pokedexes';

describe('<Pokedexes />', () => {
  test('it should mount', () => {
    render(<Pokedexes />);

    const pokedexes = screen.getByTestId('Pokedexes');

    expect(pokedexes).toBeInTheDocument();
  });
});