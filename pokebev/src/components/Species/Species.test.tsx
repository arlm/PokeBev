import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Species from './Species';

describe('<Species />', () => {
  test('it should mount', () => {
    render(<Species />);
    
    const species = screen.getByTestId('Species');

    expect(species).toBeInTheDocument();
  });
});