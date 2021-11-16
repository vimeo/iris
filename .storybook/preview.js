import { themes } from './themes';
import {
  ThemedStory,
  addThemes,
} from '@nox/addon-themes/dist/utilities';

import { GlobalStyles } from '../src/utils';
import { argTypes } from './argTypes';
import { useEffect, useState } from 'react';

addThemes(themes);

export const decorators = [
  (Story) => (
    <ThemedStory>
      <GlobalStyles />
      <ForceClientSideRender>{Story()}</ForceClientSideRender>
    </ThemedStory>
  ),
];

function ForceClientSideRender(props) {
  const [state, stateSet] = useState(0);
  useEffect(() => stateSet((state) => state + 1), []);
  return state > 0 ? <>{props.children}</> : null;
}

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
        'Icons',
        'icons',
        'Illustration',
        'illustration',
        'Components',
        'components',
        'Typography',
        'typography',
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
