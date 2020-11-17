import { date, select } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { ChevronDown } from '../../../../icons';
import { PopOver } from '../../../../layout';
import { Layout } from '../../../../storybook';
import { AttachAlias } from '../../../../utils';
import { Button } from '../../../buttons/Button/Button';
import { DateRange } from './DateRange';
import { PresetValue } from './DateRange.types';

export default { title: 'Components/Inputs/DateRange' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <DateRangeButton minDate={minDate} maxDate={maxDate} />
    </Layout.StoryVertical>
  );
}

export function Presets() {
  return (
    <Layout.StoryVertical>
      <DateRangeButton
        presets={presets}
        onPresetClick={(presetValue: PresetValue) => {
          console.log('Preset Value Selected - ', presetValue);
        }}
      />
    </Layout.StoryVertical>
  );
}

const presets = [
  'today',
  'yesterday',
  'current month',
  'last month',
  -10,
  10,
  -100,
  100,
  'custom',
];

const attachs = {
  left: 'left',
  right: 'right',
  bottom: 'bottom',
} as const;

const attachKnob = select<AttachAlias>(
  'Calendar attach',
  attachs,
  'bottom'
);

function locale(range) {
  const [start, end] = range.map((d) => d.toLocaleDateString());
  return `${start} - ${end}`;
}

// Getting date with `toDateString` so that knobs work correctly
// When implementing you can just pass `new Date()` to minDate
const defaultDate = new Date(new Date().toDateString());
const minDate = new Date(date('Minimum Date', defaultDate));
const maxDate = new Date(
  new Date().setFullYear(new Date().getFullYear() + 1)
);

function DateRangeButton({
  presets = null,
  minDate = null,
  maxDate = null,
  onPresetClick = null,
}) {
  const defaultText = 'Select a date range';
  const [buttonText, setButtonText] = useState(defaultText);

  const onChange = (range: [Date, Date]) => {
    const validRange = range[0] && range[1];

    if (validRange) setButtonText(locale(range));
    if (!validRange) setButtonText(defaultText);
  };

  return (
    <PopOver
      attach={attachKnob}
      style={
        presets && {
          width: 'calc(12rem + 40rem)', // 12rem is size of Preset Menu
          maxWidth: 'calc(12rem + 40rem)',
        }
      }
      content={
        <DateRange
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate}
          presets={presets}
          onPresetClick={onPresetClick}
        />
      }
    >
      <Button icon={<ChevronDown />} iconPosition="right">
        {buttonText}
      </Button>
    </PopOver>
  );
}
