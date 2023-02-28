import React, { ReactElement } from 'react';
import '@testing-library/jest-dom';
import {
  fireEvent,
  render,
  RenderOptions,
  screen,
} from '@testing-library/react';
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
    const input = screen.getByTestId('color-select-input');
    expect(input).toBeInTheDocument();
  });

  it('Renders ColorSelect picker using input', () => {
    renderWithThemeProvider(<ColorSelect />);
    const input = screen.getByTestId('color-select-input');
    fireEvent.click(input);
    const picker = screen.getByTestId('color-select-picker');
    expect(picker).toBeInTheDocument();
  });

  it('Renders ColorSelect picker using children', () => {
    renderWithThemeProvider(
      <ColorSelect>
        <button data-testid="trigger" />
      </ColorSelect>
    );
    const trigger = screen.getByTestId('trigger');
    fireEvent.click(trigger);
    const picker = screen.getByTestId('color-select-picker');
    expect(picker).toBeInTheDocument();
  });

  it('Set ColorSelect color using prop', () => {
    renderWithThemeProvider(<ColorSelect value={TEST_COLOR} />);
    const input = screen.getByTestId('color-select-input');
    fireEvent.click(input);

    const selectedColor = screen.getByTestId(
      'color-select-selected-value'
    );
    const selectedColorValue = selectedColor.getAttribute('color');
    expect(selectedColorValue).toBe(TEST_COLOR);
  });

  it('Change ColorSelect color using input', async () => {
    renderWithThemeProvider(<ColorSelect />);
    const input = screen.getByTestId('color-select-input');
    fireEvent.click(input);

    fireEvent.change(input, { target: { value: TEST_COLOR } });

    const selectedColor = screen.getByTestId(
      'color-select-selected-value'
    );
    const selectedColorValue = selectedColor.getAttribute('color');
    expect(selectedColorValue).toBe(TEST_COLOR);
  });

  it('Resets ColorSelect color using reset button', async () => {
    renderWithThemeProvider(<ColorSelect />);
    const input = screen.getByTestId('color-select-input');
    fireEvent.click(input);

    fireEvent.change(input, { target: { value: TEST_COLOR } });

    const resetButton = screen.getByTestId('color-select-reset');
    fireEvent.click(resetButton);

    const selectedColor = screen.getByTestId(
      'color-select-selected-value'
    );
    const selectedColorValue = selectedColor.getAttribute('color');
    expect(selectedColorValue).not.toBe(TEST_COLOR);
  });

  it('Render ColorSelect without hue slider', async () => {
    renderWithThemeProvider(<ColorSelect showHueSlider={false} />);
    const input = screen.getByTestId('color-select-input');
    fireEvent.click(input);

    const hueSlider = document.querySelector('.react-colorful__hue');

    expect(hueSlider).toHaveStyle({ display: 'none' });
  });
});
