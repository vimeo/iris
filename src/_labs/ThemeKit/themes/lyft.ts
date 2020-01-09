import { themes as iris } from '../../../themes';

export const lyft = {
  name: 'lyft',
  system: '',
  url: '',
  typography: {
    fontFamily: `Lyft Pro,HelveticaNeue,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif`,
    fontSize: 18,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  geometry: {
    borderRadius: 99999,
  },
  content: {
    ...iris.dark.content,
    color: '#FFF',
  },
  formats: {
    ...iris.dark.formats,
    primary: '#ff00bf',
    secondary: '#DBDBDB',
    basic: '#FFF',
    soft: '#EEE',
  },
};
