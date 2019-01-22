import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonFileUploadIconOnly } from './ButtonFileUploadIconOnly';

storiesOf('components/Button', module).add(
    'file upload icon only',
    () => (
        <div>
            <ButtonFileUploadIconOnly
                label="Upload"
                id="uploadButtonFileUploadIcon1"
                data-foo="bar"
            />
            <ButtonFileUploadIconOnly
                label="Upload"
                id="uploadButtonFileUploadIcon2"
                format="light"
            />
            <ButtonFileUploadIconOnly
                label="Upload"
                id="uploadButtonFileUploadIconDisabled"
                format="light"
            />
        </div>
    ),
    {
        info: {
            inline: true,
            propTables: [ButtonFileUploadIconOnly],
        },
    },
);
