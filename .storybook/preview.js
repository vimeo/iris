import { themes } from './themes';
import {
  ThemedStory,
  addThemes,
} from '@nox/addon-themes/dist/utilities';

import { GlobalStyles } from '../src/utils';
import { argTypes } from './argTypes';

addThemes(themes);

export const decorators = [
  (Story) => (
    <ThemedStory>
      <GlobalStyles />
      {Story()}
    </ThemedStory>
  ),
];

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Iris',
        'iris',
        'Tokens',
        'tokens',
        'Color',
        'color',
        'Components',
        'components',
        'Typography',
        'typography',
        'Icons',
        'icons',
        'Illustration',
        'illustration',
        '*',
        'Labs',
        'labs',
      ],
      locales: '',
    },
  },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
  },
  docs: {
    page: null,
  },
  argTypes,
};
