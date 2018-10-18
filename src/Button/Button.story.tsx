import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
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
    );
