import { addDecorator } from '@storybook/react';

import { themes } from './themes';
import { withGlobalStyles } from './decorators/withGlobalStyles';
import { withThemes, addThemes } from './addons/themes/code';
import { disabled } from './argTypes-disabled';

const categoryOrder = [
  'iris',
  'process',
  'tokens',
  'color',
  'components',
  'typography',
  'layout',
  'icons',
  'illustration',
  'motion',
  'utilties',
  'themes',
  'labs',
];

const getOrder = (header) =>
  categoryOrder.findIndex((h) => h === header);
const defaultSort = (a, b) =>
  a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
const stripCategory = (story) =>
  story[1].kind.substr(0, story[1].kind.indexOf('/')).toLowerCase();

function storySort(cur, next) {
  const a = stripCategory(cur);
  const b = stripCategory(next);

  if (a !== b) return getOrder(a) - getOrder(b);

  // order stories Props, then Examples, then Index
  if (cur[1]?.id.includes('index')) return 1;
  if (next[1]?.id.includes('index')) return -1;

  if (cur[1]?.id.includes('examples')) return 1;
  if (next[1]?.id.includes('examples')) return -1;

  return defaultSort(cur, next);
}

addThemes(themes);
addDecorator(withGlobalStyles);
addDecorator(withThemes);

export const parameters = {
  options: { storySort },
  controls: { expanded: true, hideNoControlsWarning: true },
  docs: { page: null },
  argTypes: {
    ...disabled,
  },
};
