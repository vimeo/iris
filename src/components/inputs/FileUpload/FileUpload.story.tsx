import React from 'react';

import { FileUpload } from './FileUpload';

import { Button } from '../../buttons/Button/Button';
import { Layout } from '../../../storybook';
import { UploadCloud } from '../../../icons';

export default {
  title: 'components/FileUpload',
  component: FileUpload,
  argTypes: {
    label: { table: { disable: true } },
    status: { table: { disable: true } },
    messages: { table: { disable: true } },
    src: { table: { disable: true } },
  },
};

export function Common() {
  return (
    <Layout.StoryVertical>
      <FileUpload
        onChange={(e) =>
          console.log('Uploaded file', e.target.files, e)
        }
      >
        <Button icon={<UploadCloud />}>Upload any file</Button>
      </FileUpload>
      <FileUpload
        accept=".jpg"
        onChange={(e) =>
          console.log('Uploaded JPG', e.target.files, e)
        }
      >
        <Button icon={<UploadCloud />}>Upload JPG only</Button>
      </FileUpload>
      <FileUpload
        multiple
        onChange={(e) =>
          console.log('Uploaded file(s)', e.target.files, e)
        }
      >
        <Button icon={<UploadCloud />}>Upload multiple files</Button>
      </FileUpload>
    </Layout.StoryVertical>
  );
}
Common.storyName = 'FileUpload';
