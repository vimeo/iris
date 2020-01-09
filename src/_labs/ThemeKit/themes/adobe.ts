import { themes as iris } from '../../../themes';

export const adobe = {
  dark: {
    name: 'adobe',
    system: 'spectrum',
    url: 'https://opensource.adobe.com/spectrum-css/',
    typography: {
      fontFamily: `'adobe-clean-ux', 'adobe-clean', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
      fontSize: 14,
    },
    geometry: {
      borderRadius: 16,
    },
    inputs: {
      borderWidth: 2,
      letterSpacing: '0.2px',
      fontWeight: 400,
    },
    content: {
      ...iris.dark.content,
      color: '#FFF',
    },
    formats: {
      ...iris.dark.formats,
      primary: 'rgb(20, 115, 230)',
      secondary: 'rgb(234, 234, 234)',
      basic: '#FFF',
      soft: '#EEE',
    },
  },
  light: {
    name: 'adobe',
    system: 'spectrum',
    url: 'https://opensource.adobe.com/spectrum-css/',
    typography: {
      fontFamily: `'adobe-clean-ux', 'adobe-clean', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
      fontSize: 14,
    },
    geometry: {
      borderRadius: 16,
    },
    inputs: {
      borderWidth: 2,
      letterSpacing: '0.2px',
      fontWeight: 400,
    },
    content: {
      ...iris.light.content,
      color: '#000',
    },
    formats: {
      ...iris.light.formats,
      primary: 'rgb(20, 115, 230)',
      secondary: 'rgb(34, 34, 34)',
      basic: '#000',
      soft: '#222',
    },
  },
};
