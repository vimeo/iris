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
import { DateRange } from './DateRange';

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={themes['light']}>{children}</ThemeProvider>
  );
};

const renderWithThemeProvider = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Provider, ...options });

describe('DateRange', () => {
  it('Renders DateRange', () => {
    const { container } = renderWithThemeProvider(<DateRange />);

    expect(container).toBeInTheDocument();
  });

  fit('Selects range', async () => {
    const minDate = new Date(2022, 8, 26);
    const { debug } = renderWithThemeProvider(
      <DateRange data-testid="calendar" minDate={minDate} />
    );

    const startDateInput = screen.getByRole('textbox', {
      name: 'Start Date',
    });
    await userEvent.type(startDateInput, '09/27/2022');

    const endDateInput = screen.getByRole('textbox', {
      name: 'End Date',
    });
    await userEvent.type(endDateInput, '09/28/2022');

    debug(startDateInput);
    debug(endDateInput);
  });
});
