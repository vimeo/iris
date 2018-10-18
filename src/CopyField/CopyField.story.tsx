import React from 'react';
import { storiesOf } from '@storybook/react';
import CopyField from './CopyField';

storiesOf('CopyField', module).add(
    'default',
    () => (
        <div>
            <CopyField
                id="copyField1"
                buttonFormat="strong"
                label="Copy URL"
                tooltipString="Copy this URL to the clipboard"
                successMessage="Copied!"
                stringToCopy="http://www.vimeo.com"
            />
            <CopyField
                id="copyField2"
                buttonFormat="neutral"
                label="Copy URL"
                tooltipString="Copy this URL to the clipboard"
                successMessage="Copied!"
                stringToCopy="http://www.vimeo.com"
            />
        </div>
    ),
    {
        info: {
            inline: true,
            propTables: [CopyField],
        },
    },
);
