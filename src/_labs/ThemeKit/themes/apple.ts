import { themes as iris } from '../../../themes';

export const apple = {
  dark: {
    name: 'apple',
    system: 'human interface guidelines',
    url:
      'https://developer.apple.com/design/human-interface-guidelines/',
    typography: {
      // fontFamily: `"SF Pro Text","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif`,
      fontFamily: ` -apple-system, system-ui, BlinkMacSystemFont`,
    },
    geometry: {
      borderRadius: 6,
    },
    content: {
      ...iris.dark.content,
      color: '#FFF',
    },
    formats: {
      ...iris.dark.formats,
      primary: 'rgb(10, 132, 255)',
      secondary: '#FFF',
      basic: '#FFF',
      soft: '#EEE',
    },
  },
  light: {
    name: 'apple',
    system: 'human interface guidelines',
    url:
      'https://developer.apple.com/design/human-interface-guidelines/',
    typography: {
      // fontFamily: `"SF Pro Text","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif`,
      fontFamily: ` -apple-system, system-ui, BlinkMacSystemFont`,
    },
    geometry: {
      borderRadius: 6,
    },
    content: {
      ...iris.light.content,
      color: '#000',
    },
    formats: {
      ...iris.light.formats,
      primary: 'rgb(10, 132, 255)',
      secondary: '#000',
      basic: '#000',
      soft: '#222',
    },
  },
};
