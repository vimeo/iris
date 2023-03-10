import React, { ReactElement } from 'react';
import '@testing-library/jest-dom';
import {
  fireEvent,
  render,
  RenderOptions,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorSelect2 } from './ColorSelect2';
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

describe('ColorSelect2', () => {
  it('Renders ColorSelect2 input', () => {
    renderWithThemeProvider(<ColorSelect2 />);
    const input = screen.getByLabelText('color');
    expect(input).toBeInTheDocument();
  });

  it('Renders ColorSelect2 picker using input', async () => {
    renderWithThemeProvider(<ColorSelect2 />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);
    const picker = screen.getByLabelText('color picker');
    expect(picker).toBeInTheDocument();
  });

  it('Renders ColorSelect2 picker using children', async () => {
    renderWithThemeProvider(
      <ColorSelect2>
        <button data-testid="trigger" />
      </ColorSelect2>
    );
    const trigger = screen.getByTestId('trigger');
    await userEvent.click(trigger);
    const picker = screen.getByLabelText('color picker');
    expect(picker).toBeInTheDocument();
  });

  it('Set ColorSelect2 color using value prop', async () => {
    renderWithThemeProvider(<ColorSelect2 value={TEST_COLOR} />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    const selectedColor = screen.getByLabelText('color preview');
    const selectedColorValue = selectedColor.getAttribute('color');
    expect(selectedColorValue).toBe(TEST_COLOR);
  });

  it('Change ColorSelect2 color using input', async () => {
    renderWithThemeProvider(<ColorSelect2 />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    fireEvent.change(input, { target: { value: TEST_COLOR } });

    const selectedColor = screen.getByLabelText('color preview');
    const selectedColorValue = selectedColor.getAttribute('color');
    expect(selectedColorValue).toBe(TEST_COLOR);
  });

  it('Fires onChange callback', async () => {
    const mockFn = jest.fn();

    renderWithThemeProvider(<ColorSelect2 onChange={mockFn} />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    fireEvent.change(input, { target: { value: TEST_COLOR } });

    expect(mockFn).toBeCalledWith(TEST_COLOR);
  });

  it('Fires onClose callback', async () => {
    const mockFn = jest.fn();

    renderWithThemeProvider(<ColorSelect2 onClose={mockFn} />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);
    await userEvent.click(input); // Another click to close the picker

    expect(mockFn).toBeCalled();
  });

  it('Resets ColorSelect2 color using reset button', async () => {
    const reset = { color: '#FFFFFF', label: 'My Reset' };

    renderWithThemeProvider(<ColorSelect2 reset={reset} />);
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
      <ColorSelect2 size="sm" />
    );

    const label = screen.getByLabelText('color');

    expect(label).toHaveStyle({ 'font-size': '0.75rem' });

    rerender(<ColorSelect2 size="md" />);
    expect(label).toHaveStyle({ 'font-size': '1rem' });

    rerender(<ColorSelect2 size="lg" />);
    expect(label).toHaveStyle({ 'font-size': '1.5rem' });

    rerender(<ColorSelect2 size="xl" />);
    expect(label).toHaveStyle({ 'font-size': '1.75rem' });
  });

  // it('Make ColorSelect2 required', async () => {
  //   renderWithThemeProvider(<ColorSelect2 required />);

  //   const input = screen.getByLabelText('color');
  //   await userEvent.click(input);

  //   const picker = screen.getByLabelText('color picker');
  //   const pickerInner = picker.querySelector('div');
  //   expect(pickerInner).toHaveAttribute('required');
  // });

  // it('Has a name', async () => {
  //   const name = 'hello';
  //   renderWithThemeProvider(<ColorSelect2 name={name} />);

  //   const input = screen.getByLabelText('color');
  //   await userEvent.click(input);

  //   const picker = screen.getByLabelText('color picker');
  //   const pickerInner = picker.querySelector('div');
  //   const nameAttribute = pickerInner.getAttribute('name');
  //   expect(nameAttribute).toBe(name);
  // });

  it('Render a label for ColorSelect2', async () => {
    const label = 'My Label';

    renderWithThemeProvider(<ColorSelect2 label={label} />);

    const renderedLabel = document.querySelector('label');

    expect(renderedLabel.innerHTML).toBe(label);
  });

  it('Render with initial color', async () => {
    const initial = { color: TEST_COLOR };

    renderWithThemeProvider(<ColorSelect2 initial={initial} />);

    const input = screen.getByLabelText('color') as HTMLInputElement;

    expect(input.value).toBe(TEST_COLOR);
  });

  it('Render ColorSelect2 without hue slider', async () => {
    renderWithThemeProvider(<ColorSelect2 showHueSlider={false} />);
    const input = screen.getByLabelText('color');
    await userEvent.click(input);

    const hueSlider = document.querySelector('[kind=hue]');

    expect(hueSlider).not.toBeInTheDocument();
  });

  it('Select color from presets', async () => {
    const palette = ['#909CDC', '#7BD8DB', '#78DD89', '#CCE190'];
    const mockFn = jest.fn();

    renderWithThemeProvider(
      <ColorSelect2.Presets
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
      <ColorSelect2.Presets
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
