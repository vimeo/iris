import React, { MutableRefObject, useRef, useState } from 'react';
import { Story } from '@storybook/react';

import { DateRange } from './DateRange';
import { Props } from './DateRange.types';

import { ChevronDown } from '../../../../icons';
import { PopOver } from '../../../PopOver/PopOver';
import { Layout } from '../../../../storybook';
import { Button } from '../../../Button/Button';
import { useOutsideClick } from '../../../../utils';
import { translations } from './translations';

const presets = ['today', 10, -100, 100, 'custom'];

export default {
  title: 'components/Dates/DateRange',
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
    translation: {
      options: {
        en: translations['en'],
        es: translations['es'],
        'de-DE': translations['de-DE'],
        'fr-FR': translations['fr-FR'],
        'ja-JP': translations['ja-JP'],
        'pt-BR': translations['pt-BR'],
        'ko-KR': translations['ko-KR'],
      },
    },
  },
};

const Template: Story<Props> = (args) => {
  const { minDate, maxDate } = args;

  return (
    <Layout.StoryVertical center>
      <DateRangeButton
        {...args}
        minDate={new Date(minDate)}
        maxDate={new Date(maxDate)}
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
  attach: 'bottom',
};

function locale(range) {
  const [start, end] = range.map((d) => d.toLocaleDateString());
  return `${start} - ${end}`;
}

function DateRangeButton({ ...args }) {
  const defaultText = 'Select a date range';
  const [value, setValue] = useState<
    [Date | null, Date | null] | null
  >(null);
  const [active, setActive] = useState(false);

  const onChange = (range: [Date, Date]) => {
    setValue(range);
    setActive(false);
  };

  const childrenRef =
    useRef() as unknown as MutableRefObject<HTMLElement>;
  const popOverRef =
    useRef() as unknown as MutableRefObject<HTMLElement>;
  useOutsideClick([childrenRef, popOverRef], () => {
    if (active) setActive(false);
  });

  return (
    <PopOver
      active={active}
      content={
        <DateRange
          ref={
            popOverRef as
              | MutableRefObject<HTMLInputElement>
              | undefined
          }
          onChange={onChange}
          defaultValue={
            value as [Date | null, Date | null] | undefined
          }
          {...args}
        />
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
        {value ? locale(value) : defaultText}
      </Button>
    </PopOver>
  );
}
