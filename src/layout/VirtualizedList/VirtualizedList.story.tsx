import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import { Story } from '../../storybook';
import { VirtualizedList } from './VirtualizedList';

const options = {
  range: true,
  min: 0,
  max: 1000,
  step: 1,
};

storiesOf(`Labs|Virtualized List`, module).add(
  'Virtualized List',
  () => {
    const total = number('List length', 100, options);
    const buffer = number('Buffer', 1);
    const height = number('Item height', 60);
    const width = number('Item width', 600);

    return (
      <Story title={'Virtualized List'}>
        <div style={{ height: '400px' }}>
          <VirtualizedList buffer={buffer}>
            {Array.from({ length: total }, (_, i) => (
              <div key={i} style={{ padding: '5px' }}>
                <Item
                  height={height}
                  width={width}
                  style={{ backgroundColor: randomHex() }}
                >
                  Item {i}
                </Item>
              </div>
            ))}
          </VirtualizedList>
        </div>
      </Story>
    );
  },
);

interface ItemProps {
  height: number;
  width: number;
}

const Item = styled.div<ItemProps>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`;

function randomHex() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
