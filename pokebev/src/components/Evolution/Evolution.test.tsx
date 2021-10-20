import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Evolution from './Evolution';

describe('<Evolution />', () => {
  test('it should mount', () => {
    render(<Evolution />);
    
    const evolution = screen.getByTestId('Evolution');

    expect(evolution).toBeInTheDocument();
  });
});