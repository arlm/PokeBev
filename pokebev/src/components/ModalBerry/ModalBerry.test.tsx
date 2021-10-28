import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalBerry from './ModalBerry';

describe('<ModalBerry />', () => {
  test('it should mount', () => {
    render(<ModalBerry />);
    
    const modalBerry = screen.getByTestId('ModalBerry');

    expect(modalBerry).toBeInTheDocument();
  });
});