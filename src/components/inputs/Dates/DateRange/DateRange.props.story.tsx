import React, { useState } from 'react';

import { DateRange } from './DateRange';
import { PresetValue } from './DateRange.types';

import { ChevronDown } from '../../../../icons';
import { PopOver } from '../../../PopOver/PopOver';
import { Layout } from '../../../../storybook';
import { Button } from '../../../Button/Button';
import { translations } from './translations';

export default {
  title: 'components/Dates/DateRange/props',
  parameters: {
    lostpixel: {
      disabled: true,
    },
  },
};

export function Presets({ args }) {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton
        {...args}
        presets={presets}
        onPresetClick={(presetValue: PresetValue) => {
          console.log('Preset Value Selected - ', presetValue);
        }}
      />
    </Layout.StoryVertical>
  );
}

export function InputLabel({ args }) {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton
        {...args}
        startInputLabel="Fecha de inicio"
        endInputLabel="Fecha final"
      />
    </Layout.StoryVertical>
  );
}

export function MaxDaysRange({ args }) {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton {...args} maxDaysSelected={5} />
    </Layout.StoryVertical>
  );
}

export function MinDate({ args }) {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton minDate={new Date()} {...args} />
    </Layout.StoryVertical>
  );
}

export function MaxDate({ args }) {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton maxDate={new Date()} {...args} />
    </Layout.StoryVertical>
  );
}

export function Translation({ args }) {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton
        presets={presets}
        translation={translations['ko-KR']}
        {...args}
      />
    </Layout.StoryVertical>
  );
}

export function CustomTranslation({ args }) {
  return (
    <Layout.StoryVertical center>
      <DateRangeButton
        translation={backWardsTranslations}
        {...args}
      />
    </Layout.StoryVertical>
  );
}

const backWardsTranslations = {
  apply: 'ylppA',
  clear: 'raelC',
  startDate: 'etaD tratS',
  endDate: 'etaD dnE',
  presets: 'steserP',
  months: {
    january: 'yraunaJ',
    february: 'yraurbeF',
    march: 'hcraM',
    april: 'lirpA',
    may: 'yaM',
    june: 'enuJ',
    july: 'yluJ',
    august: 'tsuguA',
    september: 'rebmetpeS',
    october: 'rebotcO',
    november: 'rebmevoN',
    december: 'rebmeceD',
  },
  daysAbbreviated: {
    sunday: 'uS',
    monday: 'oM',
    tuesday: 'uT',
    wednesday: 'eW',
    thursday: 'hT',
    friday: 'rF',
    saturday: 'aS',
  },
};

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
