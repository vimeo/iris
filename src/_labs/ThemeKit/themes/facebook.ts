import { themes as iris } from '../../../themes';

export const facebook = {
  dark: {
    name: 'facebook',
    system: '',
    url: '',
    typography: {
      fontSize: 12,
      serif: `system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif`,
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
      primary: '#4267b2',
      secondary: 'rgb(229, 229, 229)',
      basic: '#FFF',
      soft: '#EEE',
    },
    components: {
      inputs: {
        borderRadius: 0,
      },
    },
    motion: {
      loaderCircular: {
        speed: 0,
        shape: {
          width: '3rem',
          height: '2rem',
          animation: 'none',
          background:
            'url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/5jsy9wEDHzz.gif) center center/contain no-repeat',
        },
      },
    },
  },
  light: {
    name: 'facebook',
    system: '',
    url: '',
    typography: {
      fontSize: 12,
      serif: `system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif`,
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
      primary: '#4267b2',
      secondary: 'rgb(69, 69, 69)',
      basic: '#000',
      soft: '#222',
    },
    components: {
      inputs: {
        borderRadius: 0,
      },
    },
    motion: {
      loaderCircular: {
        speed: 0,
        shape: {
          width: '3rem',
          height: '2rem',
          animation: 'none',
          background:
            'url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/5jsy9wEDHzz.gif) center center/contain no-repeat',
        },
      },
    },
  },
};
