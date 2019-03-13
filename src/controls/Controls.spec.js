import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';


import Controls from './Controls';

describe ('<Controls />', () => {
  it.skip('should call the toggleLocked function', () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(<Controls />)

    fireEvent.click(getByText(/banana/));
    expect(toggleLocked).toHaveBeenCalled();
  });
})