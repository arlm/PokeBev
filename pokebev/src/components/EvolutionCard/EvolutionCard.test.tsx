import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EvolutionCard from './EvolutionCard';

describe('<EvolutionCard />', () => {
  test('it should mount', () => {
    render(<EvolutionCard />);
    
    const evolutionCard = screen.getByTestId('EvolutionCard');

    expect(evolutionCard).toBeInTheDocument();
  });
});