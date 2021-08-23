import React, { useState } from 'react';

import { DateRange } from './DateRange';
import { PresetValue } from './DateRange.types';

import { PopOver } from '../PopOver/PopOver';
import { Button } from '../Button/Button';
import { Layout } from '../../storybook';
import { ChevronDown } from '../../icons';

export default {
  title: 'components/DateRange/props',
};

export function Presets() {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton
        presets={presets}
        onPresetClick={(presetValue: PresetValue) => {
          console.log('Preset Value Selected - ', presetValue);
        }}
      />
    </Layout.StoryVertical>
  );
}

export function InputLabel() {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton
        startInputLabel="Fecha de inicio"
        endInputLabel="Fecha final"
      />
    </Layout.StoryVertical>
  );
}

export function MinDate() {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton minDate={new Date()} />
    </Layout.StoryVertical>
  );
}

export function MaxDate() {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton maxDate={new Date()} />
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

function locale(range) {
  const [start, end] = range.map((d) => d.toLocaleDateString());
  return `${start} - ${end}`;
}

function DateRangeButton({ ...props }) {
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

  return (
    <PopOver
      active={active}
      attach="bottom"
      style={
        props.presets && {
          width: 'calc(12rem + 40rem)', // 12rem is size of Preset Menu
          maxWidth: 'calc(12rem + 40rem)',
        }
      }
      content={<DateRange {...props} onChange={onChange} />}
    >
      <Button
        icon={<ChevronDown />}
        iconPosition="right"
        onClick={() => setActive(!active)}
      >
        {buttonText}
      </Button>
    </PopOver>
  );
}
