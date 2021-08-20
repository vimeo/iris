import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import { LoaderCircular as LC } from './LoaderCircular';
import { Props } from './LoaderCircular.types';

export default { title: 'motion/Loaders', component: LC };

const LoaderCircular = styled(LC)`
  margin: 1rem;
`;

const Template: Story<Props> = (args) => {
  return <LoaderCircular {...args} />;
};
export const Controls = Template.bind({});
Controls.storyName = 'Loader';
