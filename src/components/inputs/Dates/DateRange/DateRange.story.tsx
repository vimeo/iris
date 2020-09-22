import React, { useState } from 'react';
import styled from 'styled-components';
import { select, date } from '@storybook/addon-knobs';

import { DateRange } from './DateRange';

import { Button } from '../../../buttons/Button/Button';
import { Layout } from '../../../../storybook';
import { ChevronDown } from '../../../../icons';
import { PopOver } from '../../../../layout';
import { AttachAlias } from '../../../../utils';

export default { title: 'Components|Inputs/DateRange' };

export function Common() {
  return (
    <Layout.StoryVertical>
      <DateRangeButton />
    </Layout.StoryVertical>
  );
}

export function Presets() {
  return (
    <Layout.StoryVertical>
      <DateRangeButton presets={presets} />
    </Layout.StoryVertical>
  );
}

const presets = ['today', 'yesterday', -10, 10, -100, 100, 'custom'];

const attachs = {
  left: 'left',
  right: 'right',
  bottom: 'bottom',
} as const;

const attachKnob = select<AttachAlias>(
  'Calendar attach',
  attachs,
  'bottom',
);

function DateRangeButton({ presets = null }) {
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
      style={{ width: '60rem' }}
      content={
        <DateRange
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate}
          presets={presets}
        />
      }
    >
      <Button icon={<ChevronDown />} iconPosition="right">
        {buttonText}
      </Button>
    </PopOver>
  );
}

function locale(range) {
  const [start, end] = range.map(d => d.toLocaleDateString());
  return `${start} - ${end}`;
}

// Getting date with `toDateString` so that knobs work correctly
// When implementing you can just pass `new Date()` to minDate
const defaultDate = new Date(new Date().toDateString());
const minDate = new Date(date('Minimum Date', defaultDate));
const maxDate = new Date(
  new Date().setFullYear(new Date().getFullYear() + 1),
);
