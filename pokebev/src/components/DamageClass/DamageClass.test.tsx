import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DamageClass from './DamageClass';

describe('<DamageClass />', () => {
  test('it should mount', () => {
    render(<DamageClass />);
    
    const damageClass = screen.getByTestId('DamageClass');

    expect(damageClass).toBeInTheDocument();
  });
});