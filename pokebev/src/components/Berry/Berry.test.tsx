import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Berry from './Berry';

describe('<Berry />', () => {
  test('it should mount', () => {
    render(<Berry />);
    
    const berry = screen.getByTestId('Berry');

    expect(berry).toBeInTheDocument();
  });
});