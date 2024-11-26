import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components';
import { themes } from '../../themes';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('renders accordion', () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Accordion>
          <Accordion.Item />
        </Accordion>
      </ThemeProvider>
    );

    const accordion = screen.getByRole('button');
    expect(accordion).toBeInTheDocument();
  });

  it('triggers and expands accordion item when clicking the header', () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Accordion>
          <Accordion.Item />
        </Accordion>
      </ThemeProvider>
    );

    const accordion = screen.getByRole('button');
    userEvent.click(accordion).then(() => {
      const content = screen.getByRole('heading');
      expect(content).toBeInTheDocument();
    });
  });

  it('can receive text as title and subcopy props and render them', () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Accordion>
          <Accordion.Item
            title="Accordion item title"
            subcopy="Accordion item subcopy"
          />
        </Accordion>
      </ThemeProvider>
    );

    const title = screen.getByText('Accordion item title');
    const subcopy = screen.getByText('Accordion item subcopy');
    expect(title).toBeInTheDocument();
    expect(subcopy).toBeInTheDocument();
  });

  it('can receive children component and render them', () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Accordion>
          <Accordion.Item>
            <div>Child component</div>
          </Accordion.Item>
        </Accordion>
      </ThemeProvider>
    );

    const accordion = screen.getByRole('button');
    userEvent.click(accordion).then(() => {
      const childComponentContent =
        screen.getByText('Child component');
      expect(childComponentContent).toBeInTheDocument();
    });
  });

  it('does not render children when disabled prop is true', () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Accordion>
          <Accordion.Item disabled={true}>
            <div>Child component</div>
          </Accordion.Item>
        </Accordion>
      </ThemeProvider>
    );

    const accordion = screen.getByRole('button');
    userEvent.click(accordion).then(() => {
      const childComponentContent =
        screen.getByText('Child component');
      expect(childComponentContent).not.toBeInTheDocument();
    });
  });
});
