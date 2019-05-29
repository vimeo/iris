import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputDatePicker } from './InputDatePicker';
import { Story } from '../../.storybook/ui/Story';
import { ParagraphMd } from '../Type';

const aHopefullyHappyDay = new Date('Jan 20 2021');
const componentName = 'Inputs';

storiesOf(`components|${componentName}`, module).add(
  'InputDatePicker',
  () => (
    <Story title="Input Date Picker" subTitle="DatePicker">
      <div data-code>
        <InputDatePicker id="example1" label="Date" />
      </div>
      <br />
      <ParagraphMd>Specify initialDate:</ParagraphMd>
      <div data-code>
        <InputDatePicker
          id="example2"
          label="A hopefully happy day"
          initialDate={aHopefullyHappyDay}
        />
      </div>
    </Story>
  ),
);
