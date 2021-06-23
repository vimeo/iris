import { FlattenSimpleInterpolation } from 'styled-components';

// Eventually we'll pull everything out of styled-components
// and stop using theme objects in React Context.
//
// Step 1: React Context stores theme name as string.
//         Theme object is added to window/global.
//
// Step 2: React Context is removed and theme changing
//         regenerates CSS tokens.
//

export interface ThemeObject {
  theme: Mode;
}
export interface Mode {
  name: string;
  type: 'THEME' | 'DEVICE';
  [key: string]: unknown;
}

export type TokenValue = string | number | FlattenSimpleInterpolation;

export type TokenProxy = (
  grade: number
) => TokenProxy | TokenPrimitive;
export type TokenPrimitive = (grade: number) => TokenValue;

type TokenType = 'COLOR' | 'SIZE' | 'MOTION' | 'LAYOUT';

export interface Token {
  default?: string;
  type: TokenType;
  modes: {
    [mode: string]: TokenPrimitive | TokenValue;
  };
}

const DEFAULT_MODE = {
  COLOR: 'light',
  SIZE: 'desktop',
};

export function readToken(token: Token, grade = 500) {
  if (token.type === 'SIZE') {
    const key = 'desktop';
    const value = token.modes[key];

    if (typeof value === 'string') return value;
    if (typeof value === 'function') return value(grade);
  }

  if (token.type === 'COLOR') {
    return ({ theme }: ThemeObject): TokenValue => {
      let key;

      // Determine if `theme` is theme name string or a theme object.
      if (typeof theme === 'string') key = theme;
      if (typeof theme?.name === 'string') key = theme.name;

      const value = validate(token, key);

      if (typeof value === 'string') return value;
      if (typeof value === 'function') return value(grade);
    };
  }
}

function validate(token, key) {
  let value = token.modes[key];

  const valid =
    typeof value === 'function' || typeof value === 'string';

  if (!valid) {
    console.warn('Invalid Theme: ' + key);

    if (token.default) key = token.default;
    if (!token.default) key = DEFAULT_MODE[token.type];
    value = token.modes[key];
  }

  return value;
}
