import {
  addDecorator,
  addParameters,
  configure,
} from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withGlobalStyles } from './decorators/withGlobalStyles';
import { withThemes, addThemes } from '@nox/addon-themes/dist';

addThemes(['dark', 'light']);

addDecorator(withGlobalStyles);
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withThemes);

const requireAll = requireContext =>
  requireContext.keys().map(requireContext);

function loadStories() {
  require('../src/_docs/Welcome.x-story');

  requireAll(
    (require as any).context('../src', true, /\.story\.tsx?$/),
  );

  require('../src/_labs/Labs.x-story');
  require('../src/_labs/Pronouns/Pronouns.x-story');
}

configure(loadStories, module);
