import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Ability from './Ability';

describe('<Ability />', () => {
  test('it should mount', () => {
    render(<Ability />);
    
    const ability = screen.getByTestId('Ability');

    expect(ability).toBeInTheDocument();
  });
});