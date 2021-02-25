import React from 'react';
import { Story } from '@storybook/react';

import { Avatar } from './Avatar';
import { config, sizes } from './Avatar.config';
import { Props } from './Avatar.types';

export default config;

const Template: Story<Props> = (args) => {
  return (
    <Avatar
      {...args}
      src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
      srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
    />
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Avatar';
Controls.args = {
  size: 'md',
};

export function Size() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '20rem',
      }}
    >
      {sizes.map((size) => (
        <Avatar
          alt={`${size} Avatar Example`}
          src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
          srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg 2x"
          size={size}
          css={`
            margin-bottom: 1rem;
          `}
        />
      ))}
    </div>
  );
}
