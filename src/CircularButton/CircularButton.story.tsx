import React from 'react';
import { CircularButton as B } from '../';
import { storiesOf } from '@storybook/react';
import { Story } from '../../.storybook/ui/Story';
import styled from 'styled-components';
import { Plus } from '../Icons';
import { select } from '@storybook/addon-knobs';

storiesOf(`components|Buttons/`, module).add(
  'Circular Button',
  () => (
    <Story title="Circular Button">
      <CircularButton
        format={select('formats', formats, 'primary')}
        icon={<Plus />}
        size={select('size', sizes, 'lg')}
      />
    </Story>
  ),
);

const CircularButton = styled(B)`
  margin: 0 0.5rem;
`;

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const formats = {
  lightDashed: 'lightDashed',
  primary: 'primary',
  secondary: 'secondary',
  secondaryDashed: 'secondaryDashed',
};
