import React from 'react';

import { CopyField } from './CopyField';

import { Layout } from '../../storybook';
import { Heart } from '../../icons';

export default {
  title: 'components/CopyField/props',
};

export function Format() {
  return (
    <Layout.StoryVertical>
      <CopyField
        format="primary"
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}
      />
      <CopyField
        format="alternative"
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}
      />
    </Layout.StoryVertical>
  );
}

export function Size() {
  return (
    <Layout.StoryVertical>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, i) => (
        <CopyField
          key={i}
          size={size}
          value="http://www.vimeo.com"
          messages={{ success: 'Copied!' }}
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
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}
      />
      <CopyField
        variant="minimal"
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}
      />
    </Layout.StoryVertical>
  );
}

export function Status() {
  return (
    <Layout.StoryVertical>
      <CopyField
        status="negative"
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}
      />
      <CopyField
        status="positive"
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}
      />
    </Layout.StoryVertical>
  );
}

export function Children() {
  return (
    <Layout.StoryVertical>
      <CopyField
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}>
        Copy me!
      </CopyField>
      <CopyField
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}>
        <Heart />
      </CopyField>
      <CopyField
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}>
        <Heart />
        &nbsp; Copy
      </CopyField>
    </Layout.StoryVertical>
  );
}
