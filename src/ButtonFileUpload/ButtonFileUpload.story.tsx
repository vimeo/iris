import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonFileUpload } from './ButtonFileUpload';

storiesOf('components/Button', module).add(
  'file upload',
  () => (
    <div>
      <ButtonFileUpload
        label="Upload"
        id="uploadButtonFileUpload1"
        data-foo="bar"
      />
      <ButtonFileUpload
        label="Upload"
        id="uploadButtonFileUpload2"
        format="secondary"
      />
      <ButtonFileUpload
        label="Upload"
        id="uploadButtonFileUploadDisabled"
        format="secondaryTextOnly"
        disabled
      />
    </div>
  ),
  {
    info: {
      inline: true,
      propTables: [ButtonFileUpload],
    },
  },
);
