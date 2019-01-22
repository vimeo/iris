import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import styled from 'styled-components';

import ShareIcon from '../Icons/paper-plane.svg';
import HeartIcon from '../Icons/heart.svg';
import DownloadIcon from '../Icons/download-arrow.svg';

import { text, select } from '@storybook/addon-knobs';

const ButtonCropped = styled(Button)`
    max-width: 150px;
`;

const buttonFormats = {
    primary: 'primary',
    primaryDark: 'primaryDark',
    primaryOutline: 'primaryOutline',
    primaryTextOnly: 'primaryTextOnly',
    secondary: 'secondary',
    secondaryDark: 'secondaryDark',
    secondaryOutline: 'secondaryOutline',
    secondaryTextOnly: 'secondaryTextOnly',
    alternative: 'alternative',
    alternativeOutline: 'alternativeOutline',
    darkSecondary: 'darkSecondary',
    success: 'success',
    successOutline: 'successOutline',
    warning: 'warning',
    warningOutline: 'warningOutline',
    warningTextOnly: 'warningTextOnly',
    lightTransparent: 'lightTransparent',
    lightTextOnly: 'lightTextOnly',
};

storiesOf('components/Button', module)
    .add('playground', () => (
        <div>
            <Button format={select('format', buttonFormats, 'primary')}>
                {text('text', 'Play with me!')}
            </Button>
        </div>
    ))
    .add(
        'basic buttons',
        () => (
            <div>
                <Button>Primary</Button>
                <Button format="secondary">Secondary</Button>
                <Button format="alternative">Alternative</Button>
                <Button format="success">Success</Button>
                <Button format="warning">Warning</Button>
            </div>
        ),
        {
            info: {
                inline: true,
                propTables: [Button],
            },
            notes: 'test notes for button',
        },
    )
    .add(
        'text overflow',
        () => (
            <div>
                <ButtonCropped>Primary with Text Overflow</ButtonCropped>
                <ButtonCropped format="secondary">
                    Secondary with Text Overflow
                </ButtonCropped>
                <ButtonCropped format="alternative">
                    Alternative with Text Overflow
                </ButtonCropped>
                <ButtonCropped format="success">
                    Success with Text Overflow
                </ButtonCropped>
                <ButtonCropped format="warning">
                    Warning with Text Overflow
                </ButtonCropped>
            </div>
        ),
        {
            info: {
                inline: true,
                propTables: [Button],
            },
            notes:
                'Buttons must be width constrained for the text to ellipsis crop. ButtonCropped used in example has a max-width of 150px.',
        },
    )
    .add(
        'outline buttons',
        () => (
            <div>
                <Button format="primaryOutline">Primary Outline</Button>
                <Button format="secondaryOutline">Secondary Outline</Button>
                <Button format="alternativeOutline">Alternative Outline</Button>
                <Button format="successOutline">Success Outline</Button>
                <Button format="warningOutline">Warning Outline</Button>
            </div>
        ),
        {
            info: {
                inline: true,
                propTables: [Button],
            },
        },
    )
    .add(
        'icon buttons',
        () => (
            <div data-code>
                <div>
                    <Button size="lg" format="warning" icon={<ShareIcon />}>
                        warning lg
                    </Button>
                    <Button
                        size="lg"
                        format="success"
                        icon={<DownloadIcon />}
                        iconLocation="afterLabel"
                    >
                        Success lg
                    </Button>
                </div>
                <div>
                    <Button format="alternative" icon={<ShareIcon />}>
                        Alternative
                    </Button>
                    <Button
                        format="secondaryOutline"
                        icon={<HeartIcon />}
                        iconLocation="afterLabel"
                    >
                        Secondary Outline
                    </Button>
                </div>
                <div>
                    <Button size="sm" format="primary" icon={<ShareIcon />}>
                        Primary sm
                    </Button>
                    <Button
                        size="sm"
                        format="secondary"
                        icon={<DownloadIcon />}
                        iconLocation="afterLabel"
                    >
                        Secondary sm
                    </Button>
                </div>

                <div>
                    <Button
                        size="xs"
                        format="primaryOutline"
                        icon={<ShareIcon />}
                    >
                        Primary xs
                    </Button>
                    <Button
                        size="xs"
                        format="secondaryOutline"
                        icon={<ShareIcon />}
                        iconLocation="afterLabel"
                    >
                        Secondary xs
                    </Button>
                </div>
            </div>
        ),
        {
            info: {
                inline: true,
                propTables: [Button],
            },
        },
    );
