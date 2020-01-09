import { themes as iris } from '../../../themes';

export const spotify = {
  dark: {
    name: 'spotify',
    system: 'GLUE',
    typography: {
      fontFamily: `Circular, Helvetica, Arial, sans-serif`,
      fontSize: 16,
    },
    geometry: {
      borderRadius: 500,
    },
    content: {
      ...iris.dark.content,
      color: '#FFF',
    },
    formats: {
      ...iris.dark.formats,
      primary: 'rgb(29, 185, 84)',
      secondary: '#FFF',
      basic: '#FFF',
      soft: '#EEE',
      positive: 'rgb(29, 185, 84)',
    },
  },
  light: {
    name: 'spotify',
    system: 'GLUE',
    typography: {
      fontFamily: `Circular, Helvetica, Arial, sans-serif`,
      fontSize: 16,
    },
    geometry: {
      borderRadius: 500,
    },
    content: {
      ...iris.light.content,
      color: '#000',
    },
    formats: {
      ...iris.light.formats,
      primary: 'rgb(29, 185, 84)',
      secondary: '#000',
      basic: '#000',
      soft: '#222',
      positive: 'rgb(29, 185, 84)',
    },
  },
};
