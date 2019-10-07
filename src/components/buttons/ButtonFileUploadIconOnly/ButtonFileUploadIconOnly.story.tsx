import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonFileUploadIconOnly } from './ButtonFileUploadIconOnly';
import { Story } from '../../../storybook';
import styled from 'styled-components';

const $ButtonFileUploadIconOnly = styled(ButtonFileUploadIconOnly)`
  margin: 0 1rem 1rem 0;
`;

const componentName = 'Button';

storiesOf(`components|buttons/`, module).add(
  'file upload icon only',
  () => (
    <Story title={componentName} subTitle="File Upload Icon Only">
      <$ButtonFileUploadIconOnly
        label="Upload"
        id="uploadButtonFileUploadIcon1"
        data-foo="bar"
      />
      <$ButtonFileUploadIconOnly
        label="Upload"
        id="uploadButtonFileUploadIcon2"
        format="light"
      />
      <$ButtonFileUploadIconOnly
        label="Upload"
        id="uploadButtonFileUploadIconDisabled"
        format="light"
      />
    </Story>
  ),
);
