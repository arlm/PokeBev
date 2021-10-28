import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EvolutionChains from './EvolutionChains';

describe('<EvolutionChains />', () => {
  test('it should mount', () => {
    render(<EvolutionChains />);
    
    const evolutionChains = screen.getByTestId('EvolutionChains');

    expect(evolutionChains).toBeInTheDocument();
  });
});