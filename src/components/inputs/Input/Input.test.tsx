import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { themes } from '../../../themes';
import { Input } from './Input';

describe('Input', () => {
  it('Renders input', () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Input data-testid="input" />
      </ThemeProvider>
    );
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
  });

  it('Calls blur function', () => {
    const mockFn = jest.fn();
    render(
      <ThemeProvider theme={themes['light']}>
        <Input data-testid="input" onBlur={mockFn} />
      </ThemeProvider>
    );
    const input = screen.getByTestId('input');
    fireEvent.blur(input);
    expect(mockFn).toBeCalled();
  });
});
