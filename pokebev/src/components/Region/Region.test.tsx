import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Region from './Region';

describe('<Region />', () => {
  test('it should mount', () => {
    render(<Region />);
    
    const region = screen.getByTestId('Region');

    expect(region).toBeInTheDocument();
  });
});