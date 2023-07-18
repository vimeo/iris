import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../components';
import {
  formats,
  variants,
  sizes,
} from '../../components/Button/Button.config';
import { GlobalStyle } from './GlobalStyleCSSProperties';
import { themes } from '../../../.storybook/themes';

export default { title: 'Labs/A11y' };

const ButtonStickers = formats.flatMap((format) =>
  variants.flatMap((variant) =>
    sizes.flatMap((size) => ({
      format,
      size,
      variant,
    }))
  )
);

export function A11yButton() {
  return (
    <ThemeProvider theme={themes['light']}>
      <GlobalStyle />
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          padding: '1rem',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        }}
      >
        {ButtonStickers.map((props, index) => (
          <Button key={index} {...props}>
            {props.size} {props.format} {props.variant}
          </Button>
        ))}
      </div>
    </ThemeProvider>
  );
}
A11yButton.storyName = 'Buttons';
