import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withThemes, addThemes } from '@nox/addon-themes/dist';

import { themes } from './themes';
import { withGlobalStyles } from './decorators/withGlobalStyles';

const configDocs = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};

addThemes(themes);

addDecorator(withGlobalStyles);
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withThemes);

addParameters(configDocs);

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
  module,
);
