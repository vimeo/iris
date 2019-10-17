import React, { Fragment } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Tip } from './Tip';
import { ANCHOR_POINTS } from '../constants';

import { Button as B } from '../../index';
import { Story } from '../../../storybook';

storiesOf(`Components|portals/`, module).add('Tip', () => (
  <Story title="Tip">
    {ANCHOR_POINTS.map((attach, i) => (
      <Fragment key={i}>
        <Tip content="I am Tip" attach={attach}>
          <Button>Tip {attach}</Button>
        </Tip>
        <br />
      </Fragment>
    ))}
  </Story>
));

const Button = styled(B)`
  margin-bottom: 2rem;
  margin-left: 12rem;
`;
