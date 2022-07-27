import { themes } from './themes';
import {
  ThemedStory,
  addThemes,
} from '@nox/addon-themes/dist/utilities';

import { GlobalStyles } from '../src/utils';
import { useEffect, useState } from 'react';
import { DocsPage } from './DocsPage';

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

// Export argTypes here as per this solution: https://github.com/storybookjs/storybook/issues/16811
export const argTypes = {
  'aria-activedescendant': {
    table: {
      disable: true,
    },
  },
  'aria-atomic': {
    table: {
      disable: true,
    },
  },
  'aria-autocomplete': {
    table: {
      disable: true,
    },
  },
  'aria-busy': {
    table: {
      disable: true,
    },
  },
  'aria-checked': {
    table: {
      disable: true,
    },
  },
  'aria-colcount': {
    table: {
      disable: true,
    },
  },
  'aria-colindex': {
    table: {
      disable: true,
    },
  },
  'aria-colspan': {
    table: {
      disable: true,
    },
  },
  'aria-controls': {
    table: {
      disable: true,
    },
  },
  'aria-current': {
    table: {
      disable: true,
    },
  },
  'aria-describedby': {
    table: {
      disable: true,
    },
  },
  'aria-details': {
    table: {
      disable: true,
    },
  },
  'aria-disabled': {
    table: {
      disable: true,
    },
  },
  'aria-dropeffect': {
    table: {
      disable: true,
    },
  },
  'aria-errormessage': {
    table: {
      disable: true,
    },
  },
  'aria-expanded': {
    table: {
      disable: true,
    },
  },
  'aria-flowto': {
    table: {
      disable: true,
    },
  },
  'aria-grabbed': {
    table: {
      disable: true,
    },
  },
  'aria-haspopup': {
    table: {
      disable: true,
    },
  },
  'aria-hidden': {
    table: {
      disable: true,
    },
  },
  'aria-invalid': {
    table: {
      disable: true,
    },
  },
  'aria-keyshortcuts': {
    table: {
      disable: true,
    },
  },
  'aria-label': {
    table: {
      disable: true,
    },
  },
  'aria-labelledby': {
    table: {
      disable: true,
    },
  },
  'aria-level': {
    table: {
      disable: true,
    },
  },
  'aria-live': {
    table: {
      disable: true,
    },
  },
  'aria-modal': {
    table: {
      disable: true,
    },
  },
  'aria-multiline': {
    table: {
      disable: true,
    },
  },
  'aria-multiselectable': {
    table: {
      disable: true,
    },
  },
  'aria-orientation': {
    table: {
      disable: true,
    },
  },
  'aria-owns': {
    table: {
      disable: true,
    },
  },
  'aria-placeholder': {
    table: {
      disable: true,
    },
  },
  'aria-posinset': {
    table: {
      disable: true,
    },
  },
  'aria-pressed': {
    table: {
      disable: true,
    },
  },
  'aria-readonly': {
    table: {
      disable: true,
    },
  },
  'aria-relevant': {
    table: {
      disable: true,
    },
  },
  'aria-required': {
    table: {
      disable: true,
    },
  },
  'aria-roledescription': {
    table: {
      disable: true,
    },
  },
  'aria-rowcount': {
    table: {
      disable: true,
    },
  },
  'aria-rowindex': {
    table: {
      disable: true,
    },
  },
  'aria-rowspan': {
    table: {
      disable: true,
    },
  },
  'aria-selected': {
    table: {
      disable: true,
    },
  },
  'aria-setsize': {
    table: {
      disable: true,
    },
  },
  'aria-sort': {
    table: {
      disable: true,
    },
  },
  'aria-valuemax': {
    table: {
      disable: true,
    },
  },
  'aria-valuemin': {
    table: {
      disable: true,
    },
  },
  'aria-valuenow': {
    table: {
      disable: true,
    },
  },
  'aria-valuetext': {
    table: {
      disable: true,
    },
  },

  role: {
    table: {
      disable: true,
    },
  },
  onBlur: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
  onFocus: {
    table: {
      disable: true,
    },
  },
  onMouseEnter: {
    table: {
      disable: true,
    },
  },
  onMouseLeave: {
    table: {
      disable: true,
    },
  },
  alt: {
    table: {
      disable: true,
    },
  },
  as: {
    table: {
      disable: true,
    },
  },
  className: {
    table: {
      disable: true,
    },
  },
  data: {
    table: {
      disable: true,
    },
  },
  debug: {
    table: {
      disable: true,
    },
  },
  disabled: {
    table: {
      disable: true,
    },
  },
  forwardRef: {
    table: {
      disable: true,
    },
  },
  hidden: {
    table: {
      disable: true,
    },
  },
  id: {
    table: {
      disable: true,
    },
  },
  lang: {
    table: {
      disable: true,
    },
  },
  name: {
    table: {
      disable: true,
    },
  },
  style: {
    table: {
      disable: true,
    },
  },
  tabIndex: {
    table: {
      disable: true,
    },
  },
  title: {
    table: {
      disable: true,
    },
  },
  test: {
    table: {
      disable: true,
    },
  },
  theme: {
    table: {
      disable: true,
    },
  },
  accept: {
    table: {
      disable: true,
    },
  },
  autoComplete: {
    table: {
      disable: true,
    },
  },
  autoFocus: {
    table: {
      disable: true,
    },
  },
  capture: {
    table: {
      disable: true,
    },
  },
  checked: {
    table: {
      disable: true,
    },
  },
  crossOrigin: {
    table: {
      disable: true,
    },
  },
  defaultChecked: {
    table: {
      disable: true,
    },
  },
  defaultValue: {
    table: {
      disable: true,
    },
  },
  indeterminate: {
    table: {
      disable: true,
    },
  },
  max: {
    table: {
      disable: true,
    },
  },
  maxLength: {
    table: {
      disable: true,
    },
  },
  min: {
    table: {
      disable: true,
    },
  },
  minLength: {
    table: {
      disable: true,
    },
  },
  mirror: {
    table: {
      disable: true,
    },
  },
  multiple: {
    table: {
      disable: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
  onKeyDown: {
    table: {
      disable: true,
    },
  },
  onKeyUp: {
    table: {
      disable: true,
    },
  },
  pattern: {
    table: {
      disable: true,
    },
  },
  placeholder: {
    table: {
      disable: true,
    },
  },
  readOnly: {
    table: {
      disable: true,
    },
  },
  required: {
    table: {
      disable: true,
    },
  },
  step: {
    table: {
      disable: true,
    },
  },
  type: {
    table: {
      disable: true,
    },
  },
};

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
    page: DocsPage,
  },
};
