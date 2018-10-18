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
    injectGlobal
} from 'styled-components';
import { withViewport } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';

injectGlobal`
    html {
        box-sizing: border-box;
        padding: 2rem;
        font-size: 16px;
    }

    *, *:before, *:after {
        box-sizing: inherit
    }
`;

addDecorator(withInfo);
addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(withViewport);
addDecorator(
    withOptions({
        name: 'Iris',
        showAddonPanel: false,
        url: '#',
    })
);

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const loadStories = () => {
    requireAll(require.context("../src", true, /story\.tsx?$/));
}

configure(loadStories, module);
