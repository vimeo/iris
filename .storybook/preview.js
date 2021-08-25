import { themes } from './themes';
import { ThemedStory, addThemes } from './addons/themes/code';

import { GlobalStyles } from '../src/utils';
import { storySort } from './storySort';
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
    storySort,
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
