import React from 'react';
import { Story } from '@storybook/react';

import { Pagination } from './Pagination';
import { Props } from './Pagination.types';

export default {
  title: 'components/Pagination',
  component: Pagination,
};

const Template: Story<Props> = (args) => {
  return <Pagination active={1} total={12} pageSize={2} {...args} />;
};
export const Controls = Template.bind({});
Controls.storyName = 'Pagination';
