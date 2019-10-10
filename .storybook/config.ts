import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withGlobalStyles } from './decorators/withGlobalStyles';
import { withThemes, addThemes } from '@nox/addon-themes/dist';
import { themes } from './themes';

// @ts-ignore
addThemes(themes);

addDecorator(withGlobalStyles);
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withThemes);

const req = require.context('../src', true, /\.story\.tsx?$/);

function loadStories() {
  require('../src/_docs/Welcome.x-story');
  req.keys().forEach(filename => req(filename));
  require('../src/_labs/Labs.x-story');
  require('../src/_labs/Pronouns/Pronouns.x-story');
}

configure(loadStories, module);
