import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Version from './Version';

describe('<Version />', () => {
  test('it should mount', () => {
    render(<Version />);

    const version = screen.getByTestId('Version');

    expect(version).toBeInTheDocument();
  });
});