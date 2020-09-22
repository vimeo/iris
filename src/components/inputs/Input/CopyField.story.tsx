import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { CopyField } from './CopyField';

import { Layout } from '../../../storybook';
import { Heart } from '../../../icons';

export default { title: 'Components|Inputs/CopyField' };

const sizes = {
  md: 'md',
  lg: 'lg',
};

const formats = {
  primary: 'primary',
  alternative: 'alternative',
  soft: 'soft',
};

export function Common() {
  return (
    <Layout.StoryVertical>
      <CopyField
        format={select('format', formats, 'primary')}
        id="copyField1"
        label="Copy URL 1"
        value={text('value', 'http://www.vimeo.com')}
        messages={{ success: text('successMessage', 'Copied!') }}
        size={select('size', sizes, 'md')}
      />
    </Layout.StoryVertical>
  );
}

export function Format() {
  return (
    <Layout.StoryVertical>
      <CopyField
        format="primary"
        value={text('value', 'http://www.vimeo.com')}
        messages={{ success: text('successMessage', 'Copied!') }}
      />
      <CopyField
        format="alternative"
        value={text('value', 'http://www.vimeo.com')}
        messages={{ success: text('successMessage', 'Copied!') }}
      />
    </Layout.StoryVertical>
  );
}

export function Size() {
  return (
    <Layout.StoryVertical>
      {['xs', 'sm', 'md', 'lg', 'xl'].map((size, i) => (
        <CopyField
          key={i}
          size={size}
          value={text('value', 'http://www.vimeo.com')}
          messages={{ success: text('successMessage', 'Copied!') }}
        />
      ))}
    </Layout.StoryVertical>
  );
}

export function Variant() {
  return (
    <Layout.StoryVertical>
      <CopyField
        variant="basic"
        value={text('value', 'http://www.vimeo.com')}
        messages={{ success: text('successMessage', 'Copied!') }}
      />
      <CopyField
        variant="minimal"
        value={text('value', 'http://www.vimeo.com')}
        messages={{ success: text('successMessage', 'Copied!') }}
      />
    </Layout.StoryVertical>
  );
}

export function Children() {
  return (
    <Layout.StoryVertical>
      <CopyField
        value={text('value', 'http://www.vimeo.com')}
        messages={{ success: text('successMessage', 'Copied!') }}
      >
        {text('children', 'Any text here')}
      </CopyField>
      <CopyField
        value={text('value', 'http://www.vimeo.com')}
        messages={{ success: text('successMessage', 'Copied!') }}
      >
        <Heart />
      </CopyField>
      <CopyField
        value={text('value', 'http://www.vimeo.com')}
        messages={{ success: text('successMessage', 'Copied!') }}
      >
        <Heart />
        &nbsp; Copy
      </CopyField>
    </Layout.StoryVertical>
  );
}
