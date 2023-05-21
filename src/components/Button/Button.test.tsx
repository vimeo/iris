import '@testing-library/jest-dom';
import {
  fireEvent,
  render,
  RenderOptions,
  screen,
} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React, { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';
import { Pencil } from '../../icons';
import { themes } from '../../themes';
import { Button } from './Button';

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={themes['light']}>{children}</ThemeProvider>
  );
};

const renderWithThemeProvider = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Provider, ...options });

describe('Button', () => {
  it('Renders button', () => {
    renderWithThemeProvider(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = renderWithThemeProvider(
      <Button onClick={handleClick}>Click me</Button>
    );
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Renders button with text child', () => {
    const text = 'Click me';

    const { getByText } = renderWithThemeProvider(
      <Button>{text}</Button>
    );

    const buttonElement = getByText(text);
    expect(buttonElement).toBeInTheDocument();
  });

  it('Renders button with icon', () => {
    renderWithThemeProvider(<Button icon={<Pencil />} />);
    const button = screen.getByRole('button');
    expect(button.innerHTML).toContain('svg');
  });

  it('Renders loader', () => {
    renderWithThemeProvider(<Button loading />);
    const button = screen.getByRole('button');
    expect(button.innerHTML).toContain('Loader');
  });

  it('Sets color of a button', () => {
    const color = '#CCCCCC';
    renderWithThemeProvider(<Button color={color} />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ background: color });
  });

  it('Changes size of a button', () => {
    const { rerender } = renderWithThemeProvider(
      <Button size="sm" />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ fontSize: '0.875rem' });

    rerender(<Button size="md" />);
    expect(button).toHaveStyle({ fontSize: '0.875rem' });

    rerender(<Button size="xs" />);
    expect(button).toHaveStyle({ fontSize: '0.75rem' });

    rerender(<Button size="lg" />);
    expect(button).toHaveStyle({ fontSize: '1rem' });

    rerender(<Button size="xl" />);
    expect(button).toHaveStyle({ fontSize: '1.125rem' });
  });

  it('Changes status of a button', () => {
    const { rerender } = renderWithThemeProvider(
      <Button status="positive" />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({
      background: '#28A878',
    });

    rerender(<Button status="negative" />);
    expect(button).toHaveStyle({ background: '#E22B12' });
  });

  //   it('Shows focus border on focus', async () => {
  //     const { container } = renderWithThemeProvider(
  //       <Button isKeyboardOnlyFocus={false} />
  //     );

  //     const button = screen.getByRole('button');

  //     await userEvent.click(button);

  //     const focusWrapper = container.querySelector('div');

  //     expect(focusWrapper).toHaveStyle({ opacity: 1 });
  //   });
});
