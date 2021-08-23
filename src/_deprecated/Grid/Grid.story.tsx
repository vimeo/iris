import React, { cloneElement } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Story } from '@storybook/react';

import { Grid } from './Grid';
import { Props } from './Grid.types';

import { Header } from '../../typography';

// export default {
//   title: 'components/Grid',
//   component: Grid,
//   parameters: { a11y: { disabled: true } },
//   argTypes: {
//     children: { control: { disable: true } },
//     columns: {
//       control: {
//         type: 'number',
//         min: 1,
//         max: 12,
//       },
//     },
//     columnsMinWidth: {
//       name: 'columns (minWidth)',
//       control: {
//         type: 'select',
//         options: [150, 250, 500, undefined],
//       },
//     },
//   },
// };

const Template: Story<Props & { columnsMinWidth: number }> = (
  args
) => {
  const children = repeat(8, (key) => (
    <Item key={key}>
      <Header size="3">{key + 1}</Header>
    </Item>
  ));
  const { columns, columnsMinWidth, ...remainingArgs } = args;
  return (
    <Grid
      {...remainingArgs}
      columns={
        columnsMinWidth ? { minWidth: columnsMinWidth } : columns
      }
    >
      {children}
    </Grid>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'Grid';
Controls.args = {
  columns: 4,
  columnsMinWidth: undefined,
};

function repeat(length, element) {
  return Array.from({ length }).map((_, key) =>
    cloneElement(element(key), { key })
  );
}

const Item = styled.div`
  background: ${({ theme }) => rgba(theme.content.color, 0.2)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: 700;
`;
