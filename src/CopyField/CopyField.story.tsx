import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CopyField from './CopyField';

storiesOf('CopyField', module).add(
    'default',
    withInfo({
        inline: true,
        propTables: [CopyField],
    })(() => (
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
    )),
);
