import React from 'react';
import { storiesOf } from '@storybook/react';
import CopyField from './CopyField';

storiesOf('components/CopyField', module).add(
    'default',
    () => (
        <div>
            <CopyField
                buttonFormat="strong"
                id="copyField1"
                label="Copy URL"
                stringToCopy="http://www.vimeo.com"
                successMessage="Copied!"
                tooltipString="Copy this URL to the clipboard"
            />
            <br />
            <CopyField
                buttonFormat="neutral"
                id="copyField2"
                label="Copy URL"
                stringToCopy="http://www.vimeo.com"
                successMessage="Copied!"
                tooltipString="Copy this URL to the clipboard"
            />
            <br />
            <CopyField
                buttonFormat="subtle"
                id="copyField2"
                label="Copy URL"
                stringToCopy="http://www.vimeo.com"
                successMessage="Copied!"
                tooltipString="Copy this URL to the clipboard"
            />
            <br />
            <hr />
            <br />
            <CopyField
                buttonFormat="strong"
                id="copyField1"
                label="Copy URL"
                size="lg"
                stringToCopy="http://www.vimeo.com"
                successMessage="Copied!"
                tooltipString="Copy this URL to the clipboard"
            />
            <br />
            <CopyField
                buttonFormat="neutral"
                id="copyField2"
                label="Copy URL"
                size="lg"
                stringToCopy="http://www.vimeo.com"
                successMessage="Copied!"
                tooltipString="Copy this URL to the clipboard"
            />
            <br />
            <CopyField
                buttonFormat="subtle"
                id="copyField2"
                label="Copy URL"
                size="lg"
                stringToCopy="http://www.vimeo.com"
                successMessage="Copied!"
                tooltipString="Copy this URL to the clipboard"
            />
            <br />
        </div>
    ),
    {
        info: {
            inline: true,
            propTables: [CopyField],
        },
    },
);
