import React from 'react';
import { Story } from '@storybook/react';

import { Avatar } from './Avatar';
import { Props, sizes } from './Avatar.types';

export default { title: 'components/Avatar' };

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
      {SIZES.map((size, key) => (
        <Avatar
          alt={`${size} Avatar Example`}
          key={key}
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

const SIZES = Object.keys(sizes) as (keyof typeof sizes)[];
