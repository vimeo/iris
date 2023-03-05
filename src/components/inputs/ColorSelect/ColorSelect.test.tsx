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

    const hueSlider = document.querySelector('[kind=hue]');

    expect(hueSlider).not.toBeInTheDocument();
  });

  it('Select color from presets', async () => {
    const palette = ['#909CDC', '#7BD8DB', '#78DD89', '#CCE190'];
    const mockFn = jest.fn();

    renderWithThemeProvider(
      <ColorSelect.Presets
        palette={palette}
        label="Presets"
        onColorClick={mockFn}
      />
    );

    const preset = screen.getByLabelText(palette[1]);
    await userEvent.click(preset);

    expect(mockFn).toBeCalledWith(palette[1]);
  });
});
