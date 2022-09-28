import React, { ReactElement } from 'react';
import '@testing-library/jest-dom';
import {
  render,
  RenderOptions,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components';
import { themes } from '../../../../themes';
import { Calendar } from './Calendar';

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={themes['light']}>{children}</ThemeProvider>
  );
};

const renderWithThemeProvider = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Provider, ...options });

describe('Calendar', () => {
  it('Renders Calendar', () => {
    renderWithThemeProvider(<Calendar data-testid="calendar" />);
    const calendar = screen.getByTestId('calendar');
    expect(calendar).toBeInTheDocument();
  });

  it('Renders with initial month', () => {
    const date = new Date(2022, 8, 26);

    renderWithThemeProvider(
      <Calendar data-testid="calendar" initialMonth={date} />
    );

    const month = screen.getByRole('heading');
    expect(month).toHaveTextContent('September 2022');
  });

  // Renders appropriate min date, and can navigate to next month
  it('Handles min date', async () => {
    const minDate = new Date(2022, 8, 26);

    renderWithThemeProvider(
      <Calendar data-testid="calendar" minDate={minDate} />
    );

    const month = screen.getByRole('heading');
    expect(month).toHaveTextContent('September 2022');

    const nextButton = screen.getByLabelText('Next');
    await userEvent.click(nextButton);

    await expect(screen.getByRole('heading')).toHaveTextContent(
      'October 2022'
    );
  });

  //  Renders appropriate max date, and can navigate to previous month
  it('Handles max date', async () => {
    const maxDate = new Date(2022, 8, 26);

    renderWithThemeProvider(
      <Calendar data-testid="calendar" maxDate={maxDate} />
    );

    const month = screen.getByRole('heading');
    expect(month).toHaveTextContent('September 2022');

    const previousButton = screen.getByLabelText('Previous');
    await userEvent.click(previousButton);

    await expect(screen.getByRole('heading')).toHaveTextContent(
      'August 2022'
    );
  });

  it('Handles onClick', async () => {
    const minDate = new Date(2022, 8, 26);
    const mockFn = jest.fn();

    renderWithThemeProvider(
      <Calendar
        data-testid="calendar"
        minDate={minDate}
        onClick={mockFn}
      />
    );

    const clickedDay = screen.getByText('27');
    await userEvent.click(clickedDay);
    const expectedDateValue = new Date(2022, 8, 27);
    expect(mockFn).toBeCalledWith(expectedDateValue);
  });
});
