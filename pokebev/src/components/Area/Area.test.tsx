import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Area from './Area';

describe('<Area />', () => {
  test('it should mount', () => {
    render(<Area />);
    
    const area = screen.getByTestId('Area');

    expect(area).toBeInTheDocument();
  });
});