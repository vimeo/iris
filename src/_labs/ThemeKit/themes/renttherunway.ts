import { themes as iris } from '../../../themes';

export const renttherunway = {
  dark: {
    name: 'rent the runway',
    system: '',
    url: 'https://www.renttherunway.com/pages/styleguide',
    typography: {
      fontFamily: `EngraversGothic BT, sans-serif`,
      fontSize: 14,
      fontWeight: 300,
      letterSpacing: 2,
      textTransform: 'uppercase',
    },
    geometry: {
      borderRadius: 0,
    },
    content: {
      ...iris.dark.content,
      color: '#FFF',
    },
    formats: {
      ...iris.dark.formats,
      primary: '#FFF',
      secondary: '#DBDBDB',
      basic: '#FFF',
      soft: '#EEE',
    },
  },
  light: {
    name: 'rent the runway',
    system: '',
    url: 'https://www.renttherunway.com/pages/styleguide',
    typography: {
      fontFamily: `EngraversGothic BT, sans-serif`,
      fontSize: 14,
      fontWeight: 300,
      letterSpacing: 2,
      textTransform: 'uppercase',
    },
    geometry: {
      borderRadius: 0,
    },
    content: {
      ...iris.light.content,
      color: '#000',
    },
    formats: {
      ...iris.light.formats,
      primary: '#000',
      secondary: '#444',
      basic: '#000',
      soft: '#222',
    },
  },
};
