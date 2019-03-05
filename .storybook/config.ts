import {
  addDecorator,
  addParameters,
  configure,
} from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withTheme } from './decorators/withTheme';
import { withGlobalStyles } from './decorators/withGlobalStyles';
import { light } from './themes';

addParameters({
  options: {
    theme: light,
  },
});

addDecorator(withGlobalStyles);
addDecorator(withA11y);
addDecorator(withTheme);
addDecorator(withKnobs);

const requireAll = requireContext =>
  requireContext.keys().map(requireContext);

const loadStories = () => {
  requireAll(
    (require as any).context('../src', true, /story\.tsx?$/),
  );
};

configure(loadStories, module);
