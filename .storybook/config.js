// @ts-ignore
import {
    configure
} from '@storybook/react';
import {
    injectGlobal
} from 'styled-components';

injectGlobal `
    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit
    }

`;

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const loadStories = () => {
    requireAll(require.context("../src", true, /story\.tsx?$/));
}

configure(loadStories, module);