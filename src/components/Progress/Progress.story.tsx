import React from 'react';
import { Story } from '@storybook/react';

import { Progress, Props } from './Progress';

export default { title: 'components/Progress', component: Progress };

const style = `
  margin: 1rem 1rem;
  width: 50%;
`;

const Template: Story<Props> = (args) => {
  return <Progress {...args} css={style} />;
};
export const Controls = Template.bind({});
Controls.storyName = 'Progress';
Controls.args = {
  value: 50,
};
