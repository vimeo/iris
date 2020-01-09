import { themes as iris } from '../../../themes';

export const google = {
  name: 'google',
  system: 'material design',
  url: 'https://material.io/components/',
  typography: {
    textTransform: 'uppercase',
    fontFamily: `Roboto, sans-serif`,
    fontSize: 12,
    letterSpacing: 0.25,
  },
  geometry: {
    borderRadius: 4,
  },
  inputs: {
    backgroundColor: 'rgba(100, 100, 100, 0.2)',
    textTransform: 'none',
    fontSize: '16px',
    letterSpacing: '0.2px',
    borderRadius: '4px 4px 0 0',
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  content: {
    ...iris.dark.content,
    color: '#FFF',
  },
  formats: {
    ...iris.dark.formats,
    primary: '#6200ee',
    secondary: '#FFF',
    basic: '#FFF',
    soft: '#EEE',
    positive: '#4caf50',
  },
};
