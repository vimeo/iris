import { themes as iris } from '../../../themes';

export const compass = {
  dark: {
    name: 'compass',
    system: '',
    url: '',
    typography: {
      serif: `Compass Sans, Helvetica, Arial, sans-serif`,
    },
    geometry: {
      borderRadius: 2,
    },
    content: {
      ...iris.dark.content,
      color: '#FFF',
    },
    formats: {
      ...iris.dark.formats,
      primary: '#FFF',
      // #5000ff
      secondary: 'rgb(229, 229, 229)',
      basic: '#FFF',
      soft: '#EEE',
      positive: '#04AA82',
    },
    motion: {
      loaderCircular: {
        speed: 1200,
        shape: {
          width: '0.25rem',
          height: '1.5rem',
          background: '#FFF',
        },
      },
    },
  },
  light: {
    name: 'compass',
    system: '',
    url: '',
    typography: {
      serif: `Compass Sans, Helvetica, Arial, sans-serif`,
    },
    geometry: {
      borderRadius: 2,
    },
    content: {
      ...iris.light.content,
      color: '#000',
    },
    formats: {
      ...iris.light.formats,
      primary: '#000',
      // #5000ff
      secondary: 'rgb(49, 49, 49)',
      basic: '#000',
      soft: '#222',
      positive: '#04AA82',
    },
    motion: {
      loaderCircular: {
        speed: 1200,
        shape: {
          width: '0.25rem',
          height: '1.5rem',
          background: '#000',
        },
      },
    },
  },
};
