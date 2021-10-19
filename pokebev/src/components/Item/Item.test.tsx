import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Item from './Item';

describe('<Item />', () => {
  test('it should mount', () => {
    render(<Item />);
    
    const item = screen.getByTestId('Item');

    expect(item).toBeInTheDocument();
  });
});