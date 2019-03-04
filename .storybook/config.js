import {
  addDecorator,
  configure
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';
import {
  withA11y
} from '@storybook/addon-a11y';
import {
  withGlobalStyles
} from './globalStyles';

addDecorator(withGlobalStyles);
addDecorator(withKnobs);
addDecorator(withA11y);

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const loadStories = () => {
  requireAll(require.context("../src", true, /story\.tsx?$/));
}

configure(loadStories, module);