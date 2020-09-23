import React from 'react';
import { action } from '@storybook/addon-actions';

import { FileUpload } from './FileUpload';

import { Button } from '../../buttons/Button/Button';
import { Layout } from '../../../storybook';
import { UploadCloud } from '../../../icons';

export default { title: 'Components/Inputs/FileUpload' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <FileUpload
        onChange={(e) => action('Uploaded file')(e.target.files, e)}
      >
        <Button icon={<UploadCloud />}>Upload any file</Button>
      </FileUpload>
      <FileUpload
        accept=".jpg"
        onChange={(e) => action('Uploaded JPG')(e.target.files, e)}
      >
        <Button icon={<UploadCloud />}>Upload JPG only</Button>
      </FileUpload>
      <FileUpload
        multiple
        onChange={(e) =>
          action('Uploaded file(s)')(e.target.files, e)
        }
      >
        <Button icon={<UploadCloud />}>Upload multiple files</Button>
      </FileUpload>
    </Layout.StoryVertical>
  );
}
