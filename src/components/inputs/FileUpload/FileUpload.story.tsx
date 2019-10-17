import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { FileUpload as FU } from './FileUpload';

import { Button } from '../../buttons/Button/Button';
import { ButtonIconOnly } from '../../buttons/ButtonIconOnly/ButtonIconOnly';
import { Story } from '../../../storybook';
import { UploadCloud } from '../../../icons';

const FileUpload = styled(FU)`
  margin: 0 1rem 1rem 0;
`;

storiesOf(`Components|inputs/`, module).add('File Upload ', () => (
  <Story title="File Upload" subTitle="File Upload Icon Only">
    <FileUpload>
      <Button icon={<UploadCloud />}>Upload</Button>
    </FileUpload>
    <FileUpload>
      {/* // Needs Iris 8 button
      <Button icon={<UploadCloud />} variant="outline" /> */}
      <ButtonIconOnly icon={<UploadCloud />} />
    </FileUpload>
    <FileUpload>
      <ButtonIconOnly
        icon={<UploadCloud />}
        format="alternative"
        // variant="minimal" // Needs Iris 8 button
      />
    </FileUpload>
  </Story>
));
