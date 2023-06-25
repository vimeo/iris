import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components';
import { themes } from '../../../themes';
import { Slider } from './Slider';

describe('Slider', () => {
  it('Renders slider', () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Slider />
      </ThemeProvider>
    );

    const slider = screen.getByLabelText('slider');
    expect(slider).toBeInTheDocument();
  });

  it('Renders slider with 50% value', async () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Slider initialValues={[0, 100]} editableLabel />
      </ThemeProvider>
    );

    const input = screen.getByRole('start-input');
    await userEvent.click(input);
    fireEvent.change(input, { target: { value: 50 } });

    const handle = screen.getByLabelText('startHandle');
    expect(handle).toHaveStyle({ left: '50%' });
  });

  it('Renders slider with min and max', async () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Slider
          initialValues={[0, 100]}
          editableLabel
          min={0}
          max={100}
          range
        />
      </ThemeProvider>
    );

    const endInput = screen.getByRole('end-input');
    await userEvent.click(endInput);
    fireEvent.change(endInput, { target: { value: 120 } });

    const endHandle = screen.getByLabelText('endHandle');
    expect(endHandle).toHaveStyle({ left: '100%' });

    const startInput = screen.getByRole('start-input');
    await userEvent.click(startInput);
    fireEvent.change(startInput, { target: { value: -10 } });

    const startHandle = screen.getByLabelText('startHandle');
    expect(startHandle).toHaveStyle({ left: '0%' });
  });

  it('Renders slider and fire onChange', async () => {
    const onChange = jest.fn();

    render(
      <ThemeProvider theme={themes['light']}>
        <Slider
          onChange={onChange}
          initialValues={[0, 100]}
          editableLabel
        />
      </ThemeProvider>
    );

    const input = screen.getByRole('start-input');
    await userEvent.click(input);
    fireEvent.change(input, { target: { value: 50 } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('Cannot change value of disabled slider', async () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Slider initialValues={[0, 100]} disabled editableLabel />
      </ThemeProvider>
    );

    const input = screen.getByRole('start-input');
    expect(input).toHaveAttribute('disabled');
  });
});
