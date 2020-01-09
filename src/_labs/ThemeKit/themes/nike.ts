import { themes as iris } from '../../../themes';

export const nike = {
  dark: {
    name: 'nike',
    system: '',
    url: 'https://v4.instrument.com/work/nikecom',
    typography: {
      fontFamily: `"Helvetica Neue",Helvetica,Arial,sans-serif`,
      fontSize: 16,
      letterSpacing: 0.75,
    },
    geometry: {
      borderRadius: 20,
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
    name: 'nike',
    system: '',
    url: 'https://v4.instrument.com/work/nikecom',
    typography: {
      fontFamily: `"Helvetica Neue",Helvetica,Arial,sans-serif`,
      fontSize: 16,
      letterSpacing: 0.75,
    },
    geometry: {
      borderRadius: 20,
    },
    content: {
      ...iris.light.content,
      color: '#000',
    },
    formats: {
      ...iris.light.formats,
      primary: '#000',
      secondary: '#333',
      basic: '#000',
      soft: '#222',
    },
  },
};
