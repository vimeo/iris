import React from 'react';
import { storiesOf } from '@storybook/react';

import { Password } from './Password';

import { Story } from '../../../storybook';

storiesOf(`Components|inputs/Text/`, module).add('Password', () => (
  <Story title="Password">
    <Password label="Input (Password)" floating />
    <Password label="Input (Password)" />
    <Password />
  </Story>
));
