import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withThemes, addThemes } from '@nox/addon-themes/dist';

import { themes } from './themes';
import { withGlobalStyles } from './decorators/withGlobalStyles';

addThemes(themes);

addDecorator(withGlobalStyles);
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withThemes);

const categoryOrder = ['iris', 'color', 'components', 'typography', 'layout', 'icons', 'illustration', 'motion', 'utilties', 'themes', 'labs'];

const getOrder = (header) => categoryOrder.findIndex((h) => h === header);
const defaultSort = (a, b) => a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
const stripCategory = (story) => story[1].kind.substr(0, story[1].kind.indexOf('/')).toLowerCase();

function storySort(cur, next) {
  const a = stripCategory(cur);
  const b = stripCategory(next);

  if (a !== b) return getOrder(a) - getOrder(b);

  // order Common stories first
  if (cur[1]?.id.includes('common')) return -1;
  if (next[1]?.id.includes('common')) return 1;

  // order Index stories last
  if (cur[1]?.id.includes('index')) return 1;
  if (next[1]?.id.includes('index')) return -1;

  return defaultSort(cur, next);
}

addParameters({
  options: { storySort },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  a11y: {
    restoreScroll: true,
    options: {
      restoreScroll: true,
    },
  },
});

configure(
  [
    require.context('../src/_docs', true, /\.(stories|story)\.tsx$/),
    require.context('../src/_docs', true, /\.(stories|story)\.mdx$/),

    require.context('../src/color', true, /\.(stories|story)\.tsx$/),
    require.context('../src/components', true, /\.(stories|story)\.tsx$/),
    require.context('../src/icons', true, /\.(stories|story)\.tsx$/),
    require.context('../src/illustration', true, /\.(stories|story)\.tsx$/),
    require.context('../src/layout', true, /\.(stories|story)\.tsx$/),
    require.context('../src/motion', true, /\.(stories|story)\.tsx$/),
    require.context('../src/themes', true, /\.(stories|story)\.tsx$/),
    require.context('../src/typography', true, /\.(stories|story)\.tsx$/),
    require.context('../src/utils', true, /\.(stories|story)\.tsx$/),

    require.context('../src/_labs', true, /\.(stories|story)\.tsx$/),
  ],
  module
);
