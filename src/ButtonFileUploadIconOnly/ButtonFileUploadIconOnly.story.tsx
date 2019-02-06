import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonFileUploadIconOnly } from './ButtonFileUploadIconOnly';
import { Story } from '../../.storybook/Story';

const componentName = 'Button';

storiesOf(`components/${componentName}`, module).add(
  'file upload icon only',
  () => (
    <Story title={componentName} subTitle="File Upload Icon Only">
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
    </Story>
  ),
);
