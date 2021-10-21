import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Encounter from './Encounter';

describe('<Encounter />', () => {
  test('it should mount', () => {
    render(<Encounter />);
    
    const encounter = screen.getByTestId('Encounter');

    expect(encounter).toBeInTheDocument();
  });
});