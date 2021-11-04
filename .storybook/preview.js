import { themes } from './themes';
import { ThemedStory, addThemes } from './addons/themes/code';

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
    storySort: (cur, next) => {
      const categoryOrder = [
        'iris',
        'tokens',
        'color',
        'components',
        'typography',
        'icons',
        'illustration',
        '*',
        'utilties',
        'labs',
      ];

      const getOrder = (header) =>
        categoryOrder.findIndex((h) => h === header);

      const defaultSort = (a, b) =>
        a.id.localeCompare(b.id, undefined, { numeric: true });

      const stripCategory = (story) =>
        story.title.substr(0, story.title.indexOf('/')).toLowerCase();

      const a = stripCategory(cur);
      const b = stripCategory(next);

      if (a !== b) return getOrder(a) - getOrder(b);

      // order stories /props, then /examples, then remaining
      if (cur?.id.includes('index')) return 1;
      if (next?.id.includes('index')) return -1;

      if (cur?.id.includes('examples')) return 1;
      if (next?.id.includes('examples')) return -1;

      return defaultSort(cur, next);
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
