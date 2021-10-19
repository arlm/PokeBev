import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Location from './Location';

describe('<Location />', () => {
  test('it should mount', () => {
    render(<Location />);
    
    const location = screen.getByTestId('Location');

    expect(location).toBeInTheDocument();
  });
});