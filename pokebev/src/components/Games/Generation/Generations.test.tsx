import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Generations from './Generations';

describe('<Games />', () => {
  test('it should mount', () => {
    render(<Generations />);

    const generations = screen.getByTestId('Generations');

    expect(generations).toBeInTheDocument();
  });
});