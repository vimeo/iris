import React, { ReactElement } from 'react';
import '@testing-library/jest-dom';
import {
  fireEvent,
  render,
  RenderOptions,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorSelect } from './ColorSelect';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../../themes';

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={themes['light']}>{children}</ThemeProvider>
  );
};

const renderWithThemeProvider = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Provider, ...options });

const TEST_COLOR = '#CCCCCC';

describe('ColorSelect', () => {
  it('Renders ColorSelect input', () => {
    renderWithThemeProvider(<ColorSelect />);
    const input = screen.getByLabelText('color');
    expect(input).toBeInTheDocument();
  });

  it('Renders ColorSelect picker using input', async () => {
    renderWithThemeProvider(<ColorSelect />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);
    const picker = screen.getByLabelText('color picker');
    expect(picker).toBeInTheDocument();
  });

  it('Renders ColorSelect picker using children', async () => {
    renderWithThemeProvider(
      <ColorSelect>
        <button data-testid="trigger" />
      </ColorSelect>
    );
    const trigger = screen.getByTestId('trigger');
    await userEvent.click(trigger);
    const picker = screen.getByLabelText('color picker');
    expect(picker).toBeInTheDocument();
  });

  it('Set ColorSelect color using prop', async () => {
    renderWithThemeProvider(<ColorSelect value={TEST_COLOR} />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    const selectedColor = screen.getByLabelText('color preview');
    const selectedColorValue = selectedColor.getAttribute('color');
    expect(selectedColorValue).toBe(TEST_COLOR);
  });

  it('Change ColorSelect color using input', async () => {
    renderWithThemeProvider(<ColorSelect />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    fireEvent.change(input, { target: { value: TEST_COLOR } });

    const selectedColor = screen.getByLabelText('color preview');
    const selectedColorValue = selectedColor.getAttribute('color');
    expect(selectedColorValue).toBe(TEST_COLOR);
  });

  it('Resets ColorSelect color using reset button', async () => {
    renderWithThemeProvider(<ColorSelect />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    fireEvent.change(input, { target: { value: TEST_COLOR } });

    const resetButton = screen.getByLabelText('reset');
    await userEvent.click(resetButton);

    const selectedColor = screen.getByLabelText('color preview');
    const selectedColorValue = selectedColor.getAttribute('color');
    expect(selectedColorValue).not.toBe(TEST_COLOR);
  });

  it('Render ColorSelect without hue slider', async () => {
    renderWithThemeProvider(<ColorSelect showHueSlider={false} />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    const hueSlider = document.querySelector('.react-colorful__hue');

    expect(hueSlider).toHaveStyle({ display: 'none' });
  });
});
