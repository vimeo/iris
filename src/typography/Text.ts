import styled from 'styled-components';

import { fontFamily, antialias } from './typography';
import { themes } from '../themes';

export const Text = styled.span.attrs(
  ({ theme, format = 'primary', ...props }: any) => {
    // Remove in Iris 8.0
    if (!theme.formats && process.env.NODE_ENV === 'development')
      console.warn('Invalid theme:', { theme });
    if (theme === 'light') theme = themes.light;
    if (theme === 'dark') theme = themes.dark;
    //

    const color = theme.formats[format];

    return { color, ...props };
  },
)`
  font: 400 0.875rem / 1.375rem ${fontFamily};
  letter-spacing: 0.0125rem;
  color: ${p => p.color};
  ${antialias};
`;
