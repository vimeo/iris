import React from 'react';
import { Story } from '@storybook/react';

import { Ribbon } from './Ribbon';
import { Props } from './Ribbon.types';

export default { title: 'components/Ribbon', component: Ribbon };

const Template: Story<Props> = (args) => {
  return <Ribbon {...args} style={{ width: '50%' }} />;
};
export const Controls = Template.bind({});
Controls.storyName = 'Ribbon';
