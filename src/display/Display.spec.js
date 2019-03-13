import React from 'react';
import {render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from '../controls/Controls';

describe('<Display />', () => {
  it('should render lock button', () => {
    const { getByText } = render(<Controls />);
    const lockButton = getByText('Lock Gate');

    expect(lockButton).toBeInTheDocument();
  })

  it('should render close button', () => {
    const { getByText } = render(<Controls />);
    const closeButton = getByText('Close Gate');

    expect(closeButton).toBeInTheDocument();
  })
})