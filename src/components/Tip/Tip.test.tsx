import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components';
import { themes } from '../../themes';
import { Tip } from './Tip';
import { Button } from '../Button/Button';

describe('Tip', () => {
  it('triggers by hovering the wrapped button', () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Tip content="tip" data-testid="tip" active={false}>
          <Button>Button</Button>
        </Tip>
      </ThemeProvider>
    );

    const button = screen.getByText(/button/i);
    userEvent.hover(button).then(() => {
      const tip = screen.getByTestId('tip');
      expect(tip).toBeInTheDocument();
    });
  });

  it('triggers by clicking the wrapped button', () => {
    render(
      <ThemeProvider theme={themes['light']}>
        <Tip content="tip" data-testid="tip" trigger="click">
          <Button>Button</Button>
        </Tip>
      </ThemeProvider>
    );

    const button = screen.getByText(/Button/i);

    expect(button).toBeInTheDocument();

    userEvent.click(button).then(() => {
      const tip = screen.getByTestId('tip');
      expect(tip).toBeInTheDocument();
    });
  });
});

it('has a text content', () => {
  render(
    <ThemeProvider theme={themes['light']}>
      <Tip content="this is a text" data-testid="tip" active>
        <Button>Button</Button>
      </Tip>
    </ThemeProvider>
  );

  const tip = screen.getByText('this is a text');
  expect(tip).toHaveTextContent('this is a text');
});

it('is not visible on hovering the wrapped button when disabled', () => {
  render(
    <ThemeProvider theme={themes['light']}>
      <Tip content="tip" data-testid="tip" disabled>
        <Button>Button</Button>
      </Tip>
    </ThemeProvider>
  );
  const button = screen.getByText(/Button/i);
  userEvent.hover(button).then(() => {
    const tip = screen.getByTestId('tip');
    expect(tip).not.toBeInTheDocument();
  });
});

it('can recieve children component as prop and render them', () => {
  render(
    <ThemeProvider theme={themes['light']}>
      <Tip
        content="tip"
        data-testid="tip"
        children={<Button>Button</Button>}
      />
    </ThemeProvider>
  );

  const button = screen.getByText(/Button/i);
  expect(button).toBeInTheDocument();

  userEvent.hover(button).then(() => {
    const tip = screen.getByTestId('tip');
    expect(tip).toBeInTheDocument();
  });
});
