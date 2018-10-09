// @ts-ignore
import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components';

injectGlobal`
    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit
    }

`;

function loadStories() {
    require('../stories/index');
    // You can require as many stories as you need.
}

configure(loadStories, module);
