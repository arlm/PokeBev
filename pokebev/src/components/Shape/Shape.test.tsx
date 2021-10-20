import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Shape from './Shape';

describe('<Shape />', () => {
  test('it should mount', () => {
    render(<Shape />);
    
    const shape = screen.getByTestId('Shape');

    expect(shape).toBeInTheDocument();
  });
});