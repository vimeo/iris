import {
    addDecorator,
    configure
} from '@storybook/react';
import {
    withInfo
} from '@storybook/addon-info';
import {
    withNotes
} from '@storybook/addon-notes';
import {
    withOptions
} from '@storybook/addon-options';
import {
    withViewport
} from '@storybook/addon-viewport';
import {
    withKnobs
} from '@storybook/addon-knobs';
import {
    injectGlobal
} from 'styled-components'

injectGlobal `
    html {
        box-sizing: border-box;
        padding: 2rem;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    *, *:before, *:after {
        box-sizing: inherit
    }

    blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }
`;

addDecorator(withInfo);
addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(withViewport);

import {
    themes
} from '@storybook/components';

addDecorator(
    withOptions({
        name: 'Iris',
        url: '#',
        theme: themes.light,
    })
);

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const loadStories = () => {
    requireAll(require.context("../src", true, /story\.tsx?$/));
}

configure(loadStories, module);