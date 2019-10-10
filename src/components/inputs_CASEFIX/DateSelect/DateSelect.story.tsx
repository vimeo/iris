import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateSelect } from './DateSelect';

import { Story } from '../../../storybook';
import { ParagraphMd } from '../../../legacy';

const aHopefullyHappyDay = new Date('Jan 20 2021');
const componentName = 'Inputs';

storiesOf(`components|${componentName}`, module).add(
  'DateSelect',
  () => (
    <Story title="Input Date Picker" subTitle="DatePicker">
      <div data-code>
        <DateSelect id="example1" label="Date" />
      </div>
      <br />
      <ParagraphMd>Specify initialDate:</ParagraphMd>
      <div data-code>
        <DateSelect
          id="example2"
          label="A hopefully happy day"
          initialDate={aHopefullyHappyDay}
        />
      </div>
    </Story>
  ),
);
