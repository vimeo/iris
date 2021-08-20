import React, { useRef, useState } from 'react';
import { Story } from '@storybook/react';

import { DateRange } from './DateRange';
import { Props } from './DateRange.types';

import { ChevronDown } from '../../../../icons';
import { PopOver } from '../../../../layout';
import { Layout } from '../../../../storybook';
import { Button } from '../../../buttons/Button/Button';
import { useOutsideClick } from '../../../../utils';

const presets = ['today', 10, -100, 100, 'custom'];

export default {
  title: 'Components/Inputs/Dates/DateRange',
  component: DateRange,
  argTypes: {
    label: { table: { disable: true } }, // not relevant
    status: { table: { disable: true } }, // not relevant
    messages: { table: { disable: true } }, // not relevant
    value: { table: { disable: true } }, // not relevant
    src: { table: { disable: true } }, // not relevant
    attach: { table: { disable: true } }, // deprecated
    presets: {
      control: { type: 'select', options: [presets, undefined] },
    },
    onPresetClick: { control: { disable: true } },
    minDate: { control: { type: 'date' } },
    maxDate: { control: { type: 'date' } },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton
        {...args}
        minDate={new Date(args.minDate)}
        maxDate={new Date(args.maxDate)}
      />
    </Layout.StoryVertical>
  );
};

export const Controls = Template.bind({});
Controls.storyName = 'DateRange';

const minDate = new Date();
const maxDate = new Date(
  new Date().setFullYear(new Date().getFullYear() + 1)
);

Controls.args = {
  minDate,
  maxDate,
  startInputLabel: 'Start date',
  endInputLabel: 'End date',
  attach: 'bottom',
};

function locale(range) {
  const [start, end] = range.map((d) => d.toLocaleDateString());
  return `${start} - ${end}`;
}

function DateRangeButton({ ...args }) {
  const defaultText = 'Select a date range';
  const [buttonText, setButtonText] = useState(defaultText);
  const [active, setActive] = useState(true);

  const onChange = (range: [Date, Date]) => {
    const validRange = range[0] && range[1];

    if (validRange) {
      setButtonText(locale(range));
      setActive(false);
    }
    if (!validRange) setButtonText(defaultText);
  };

  const childrenRef = useRef();
  const popOverRef = useRef();
  useOutsideClick([childrenRef, popOverRef], () => {
    if (active) setActive(false);
  });

  return (
    <PopOver
      active={active}
      content={
        <DateRange ref={popOverRef} onChange={onChange} {...args} />
      }
      style={
        args.presets && {
          width: 'calc(12rem + 40rem)', // 12rem is size of Preset Menu
          maxWidth: 'calc(12rem + 40rem)',
        }
      }
    >
      <Button
        icon={<ChevronDown />}
        iconPosition="right"
        onClick={() => setActive(!active)}
        ref={childrenRef}
      >
        {buttonText}
      </Button>
    </PopOver>
  );
}
