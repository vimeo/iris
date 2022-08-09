import React from 'react';

import { CopyField } from './CopyField';

import { Layout } from '../../../storybook';
import { Heart } from '../../../icons';

export default {
  title: 'components/CopyField/props',
};

export function Format({ args }) {
  return (
    <Layout.StoryVertical>
      <CopyField
        {...args}
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

export function Size({ args }) {
  return (
    <Layout.StoryVertical>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, i) => (
        <CopyField
          {...args}
          key={i}
          size={size}
          value="http://www.vimeo.com"
          messages={{ success: 'Copied!' }}
        />
      ))}
    </Layout.StoryVertical>
  );
}

export function Variant({ args }) {
  return (
    <Layout.StoryVertical>
      <CopyField
        {...args}
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

export function Status({ args }) {
  return (
    <Layout.StoryVertical>
      <CopyField
        {...args}
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

export function Children({ args }) {
  return (
    <Layout.StoryVertical>
      <CopyField
        {...args}
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}
      >
        Copy me!
      </CopyField>
      <CopyField
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}
      >
        <Heart />
      </CopyField>
      <CopyField
        value="http://www.vimeo.com"
        messages={{ success: 'Copied!' }}
      >
        <Heart />
        &nbsp; Copy
      </CopyField>
    </Layout.StoryVertical>
  );
}
