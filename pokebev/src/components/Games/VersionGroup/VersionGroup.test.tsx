import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VersionGroup from './VersionGroup';

describe('<VersionGroup />', () => {
  test('it should mount', () => {
    render(<VersionGroup />);

    const versionGroup = screen.getByTestId('VersionGroup');

    expect(versionGroup).toBeInTheDocument();
  });
});