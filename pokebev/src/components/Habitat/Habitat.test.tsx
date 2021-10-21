import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Habitat from './Habitat';

describe('<Habitat />', () => {
  test('it should mount', () => {
    render(<Habitat />);
    
    const habitat = screen.getByTestId('Habitat');

    expect(habitat).toBeInTheDocument();
  });
});