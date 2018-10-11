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
    require('../src/Button/Button.story');
    require('../src/AddNewItemCard/AddNewItemCard.story');
}

configure(loadStories, module);
