import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Effect from './Effect';

describe('<Effect />', () => {
  test('it should mount', () => {
    render(<Effect />);
    
    const effect = screen.getByTestId('Effect');

    expect(effect).toBeInTheDocument();
  });
});