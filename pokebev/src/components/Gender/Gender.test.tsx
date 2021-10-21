import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gender from './Gender';

describe('<Gender />', () => {
  test('it should mount', () => {
    render(<Gender />);
    
    const gender = screen.getByTestId('Gender');

    expect(gender).toBeInTheDocument();
  });
});