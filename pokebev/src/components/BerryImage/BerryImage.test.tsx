import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BerryImage from './BerryImage';

describe('<BerryImage />', () => {
  test('it should mount', () => {
    render(<BerryImage />);
    
    const berryImage = screen.getByTestId('BerryImage');

    expect(berryImage).toBeInTheDocument();
  });
});