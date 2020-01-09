import { themes as iris } from '../../../themes';

export const artsy = {
  name: 'artsy',
  system: 'palette',
  url: 'https://palette.artsy.net/',
  typography: {
    fontFamily: 'system-ui',
    serif: `"Adobe Garamond W08", adobe-garamond-pro, AGaramondPro-Regular, "Times New Roman", Times, serif`,
  },
  geometry: {
    borderRadius: 3,
  },
  content: {
    ...iris.dark.content,
    color: '#FFF',
  },
  formats: {
    ...iris.dark.formats,
    primary: '#FFF',
    secondary: 'rgb(229, 229, 229)',
    basic: '#FFF',
    soft: '#EEE',
    positive: '#0EDA83',
    negative: '#F7625A',
  },
};
