import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Flavor from './Flavor';

describe('<Flavor />', () => {
  test('it should mount', () => {
    render(<Flavor />);
    
    const flavor = screen.getByTestId('Flavor');

    expect(flavor).toBeInTheDocument();
  });
});