import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Story } from '@storybook/react';

import { Dock as D, Props } from './Dock';
import { Gear } from '../../icons';
import { Header } from '../../typography';

// export default {
//   title: 'components/Dock',
//   component: D,
//   argTypes: {
//     attach: {
//       control: {
//         type: 'select',
//         options: [
//           'top',
//           'topRight',
//           'right',
//           'bottomRight',
//           'bottom',
//           'bottomLeft',
//           'left',
//           'topLeft',
//         ],
//       },
//     },
//   },
// };

const Template: Story<Props> = (args) => {
  return (
    <Dock {...args}>
      <Content>
        <IconSection>
          <Gear />
        </IconSection>
        <Header size="6">Custom dock</Header>
      </Content>
    </Dock>
  );
};
export const Controls = Template.bind({});
Controls.storyName = 'Dock';

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 7rem;
`;

const IconSection = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 1.5rem 0 0.5rem;
`;

const Dock = styled(D)`
  box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;
