import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contest from './Contest';

describe('<Contest />', () => {
  test('it should mount', () => {
    render(<Contest />);
    
    const contest = screen.getByTestId('Contest');

    expect(contest).toBeInTheDocument();
  });
});