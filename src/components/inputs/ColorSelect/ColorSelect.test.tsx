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

  it('Set ColorSelect color using value prop', async () => {
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

  it('Fires onChange callback', async () => {
    const mockFn = jest.fn();

    renderWithThemeProvider(<ColorSelect onChange={mockFn} />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    fireEvent.change(input, { target: { value: TEST_COLOR } });

    expect(mockFn).toBeCalledWith(TEST_COLOR);
  });

  it('Fires onClose callback', async () => {
    const mockFn = jest.fn();

    renderWithThemeProvider(<ColorSelect onClose={mockFn} />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);
    await userEvent.click(input); // Another click to close the picker

    expect(mockFn).toBeCalled();
  });

  it('Resets ColorSelect color using reset button', async () => {
    const reset = { color: '#FFFFFF', label: 'My Reset' };

    renderWithThemeProvider(<ColorSelect reset={reset} />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    fireEvent.change(input, { target: { value: TEST_COLOR } });

    const resetButton = screen.getByLabelText('reset');
    await userEvent.click(resetButton);

    const selectedColor = screen.getByLabelText('color preview');
    const selectedColorValue = selectedColor.getAttribute('color');
    expect(selectedColorValue).toBe(reset.color);
  });

  it('Change size', async () => {
    const { rerender } = renderWithThemeProvider(
      <ColorSelect size="sm" />
    );

    const label = screen.getByLabelText('color');

    expect(label).toHaveStyle({ 'font-size': '0.75rem' });

    rerender(<ColorSelect size="md" />);
    expect(label).toHaveStyle({ 'font-size': '1rem' });

    rerender(<ColorSelect size="lg" />);
    expect(label).toHaveStyle({ 'font-size': '1.5rem' });

    rerender(<ColorSelect size="xl" />);
    expect(label).toHaveStyle({ 'font-size': '1.75rem' });
  });

  it('Make ColorSelect required', async () => {
    renderWithThemeProvider(<ColorSelect required />);

    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    const picker = screen.getByLabelText('color picker');
    const pickerInner = picker.querySelector('div');
    expect(pickerInner).toHaveAttribute('required');
  });

  it('Has a name', async () => {
    const name = 'hello';
    renderWithThemeProvider(<ColorSelect name={name} />);

    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    const picker = screen.getByLabelText('color picker');
    const pickerInner = picker.querySelector('div');
    const nameAttribute = pickerInner.getAttribute('name');
    expect(nameAttribute).toBe(name);
  });

  it('Render a label for ColorSelect', async () => {
    const label = 'My Label';

    renderWithThemeProvider(<ColorSelect label={label} />);

    const renderedLabel = document.querySelector('label');

    expect(renderedLabel.innerHTML).toBe(label);
  });

  it('Render with initial color', async () => {
    const initial = { color: TEST_COLOR };

    renderWithThemeProvider(<ColorSelect initial={initial} />);

    const input = screen.getByLabelText('color') as HTMLInputElement;

    expect(input.value).toBe(TEST_COLOR);
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

  it('Render a label for presets', async () => {
    const palette = ['#909CDC', '#7BD8DB', '#78DD89', '#CCE190'];
    const label = 'My Label';

    renderWithThemeProvider(
      <ColorSelect.Presets
        palette={palette}
        label={label}
        onColorClick={() => {
          console.log('click ');
        }}
      />
    );

    const renderedLabel = document.querySelector('h6');

    expect(renderedLabel.innerHTML).toBe(label);
  });
});
