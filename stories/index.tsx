import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../src/Button/Button';

storiesOf('Button', module)
    .add(
        'basic buttons',
        withInfo({
            inline: true,
            propTables: [Button],
        })(() => (
            <div>
                <Button>Primary</Button>
                <Button format="secondary">Secondary</Button>
                <Button format="alternative">Alternative</Button>
                <Button format="success">Success</Button>
                <Button format="warning">Warning</Button>
            </div>
        )),
    )
    .add(
        'outline buttons',
        withInfo({
            inline: true,
            propTables: [Button],
        })(() => (
            <div>
                <Button format="primaryOutline">Primary Outline</Button>
                <Button format="secondaryOutline">Secondary Outline</Button>
                <Button format="alternativeOutline">Alternative Outline</Button>
                <Button format="successOutline">Success Outline</Button>
                <Button format="warningOutline">Warning Outline</Button>
            </div>
        )),
    );
