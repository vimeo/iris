import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FileUpload as FU } from './FileUpload';

import { Button } from '../../buttons/Button/Button';
import { Story } from '../../../storybook';
import { UploadCloud } from '../../../icons';

const FileUpload = styled(FU)`
  margin: 0 1rem 1rem 0;
`;

storiesOf(`Components|inputs/`, module).add('File Upload ', () => (
  <Story title="File Upload" subTitle="File Upload Icon Only">
    <FileUpload
      onChange={e => action('Uploaded file 1')(e.target.files, e)}
    >
      <Button icon={<UploadCloud />}>Upload</Button>
    </FileUpload>
    <FileUpload
      onChange={e => action('Uploaded file 2')(e.target.files, e)}
    >
      <Button icon={<UploadCloud />} variant="outline" />
    </FileUpload>
    <FileUpload
      onChange={e => action('Uploaded file 3')(e.target.files, e)}
    >
      <Button
        icon={<UploadCloud />}
        format="alternative"
        variant="minimal"
      />
    </FileUpload>
  </Story>
));
