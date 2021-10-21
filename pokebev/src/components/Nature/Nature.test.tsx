import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nature from './Nature';

describe('<Nature />', () => {
  test('it should mount', () => {
    render(<Nature />);
    
    const nature = screen.getByTestId('Nature');

    expect(nature).toBeInTheDocument();
  });
});