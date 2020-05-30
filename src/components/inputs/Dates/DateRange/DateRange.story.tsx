import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select, date } from '@storybook/addon-knobs';
import { DateRange } from './DateRange';
import { Story } from '../../../../storybook';
import { Button } from '../../../buttons/Button/Button';
import { ChevronDown } from '../../../../icons';
import { PopOver } from '../../../portals/PopOver/PopOver';
import { Header } from '../../../../typography';

const attachs = {
  left: 'left',
  right: 'right',
  center: 'center',
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

storiesOf(`Components|inputs/Dates`, module)
  .add('Date Range', () => (
    <Story title="Date Range" subTitle="DateRange">
      <Header size="2">Base component</Header>
      <DateRange />
      <Header size="2">Date Range as Popover</Header>
      <Container>
        <DateRangeButton />
      </Container>
    </Story>
  ))
  .add('Date Presets', () => (
    <Story
      title="Date Range with Presets"
      subTitle="DateRangeWithPresets"
    >
      <DateRange
        presets={['today', 'yesterday', -10, 10, -100, 100, 'custom']}
      />
    </Story>
  ));

function DateRangeButton() {
  const defaultText = 'Select a date range';
  const [buttonText, setButtonText] = useState(defaultText);

  const onChange = (range: [Date, Date]) => {
    if (range[0] && range[1]) {
      const start = range[0].toLocaleDateString();
      const end = range[1].toLocaleDateString();
      setButtonText(`${start} - ${end}`);
    } else {
      setButtonText(defaultText);
    }
  };

  // Getting date with `toDateString` so that knobs work correctly
  // When implementing you can just pass `new Date()` to minDate
  const defaultDate = new Date(new Date().toDateString());
  const minDate = new Date(date('Minimum Date', defaultDate));
  const maxDate = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1),
  );

  return (
    <PopOver
      attach={select('Calendar attach', attachs, 'bottom')}
      style={{ width: '60rem' }}
      content={
        <DateRange
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate}
        />
      }
    >
      <Button icon={<ChevronDown />} iconPosition="right">
        {buttonText}
      </Button>
    </PopOver>
  );
}
