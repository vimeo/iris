import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { RadioSet as IRS } from './RadioSet';
import { Radio as IR } from '../Radio/Radio';
import { RadioWrapperStyled } from '../Radio/RadioStyled';

import { Story } from '../../../storybook';

const Radio = styled(IR)`
  margin: 0.5rem 0;
`;
const RadioSet = styled(IRS)`
  margin: 0 0 2rem;

  & > ${RadioWrapperStyled} {
    margin: 0.5rem 0;
  }
`;

const generateDemoOptions = (id: number) => {
  return [
    {
      label: 'Radio 1',
      id: `Radio1Set${id}`,
      value: '1',
    },
    {
      label: 'Radio 2',
      id: `Radio2Set${id}`,
      value: '2',
    },
    {
      label: 'Radio 3 (Disabled)',
      id: `Radio3Set${id}`,
      value: '3',
      disabled: true,
    },
  ];
};

storiesOf(`components|inputs`, module).add('radio select', () => (
  <Story title="Input Radio" subTitle="Radio">
    <div style={{ marginBottom: '2rem' }}>
      <Radio
        label="Single Radio"
        name="SingleRadio"
        id="SingleRadio"
      />
      <Radio
        label="Disabled Radio"
        name="DisabledRadio"
        id="DisabledRadio"
        disabled
      />
    </div>
    <div>
      <RadioSet
        label="Radio Set 1"
        id="RadioSet1"
        name="radioSet1"
        radios={generateDemoOptions(1)}
      />
      <RadioSet
        format="negative"
        label="Radio Set 2 (Errored)"
        id="RadioSet2"
        name="radioSet2"
        errorMsg="Please select one of these inputs"
        radios={generateDemoOptions(2)}
      />
      <RadioSet
        format="positive"
        label="Radio Set 3 (Succeeded)"
        id="RadioSet3"
        name="radioSet3"
        radios={generateDemoOptions(3)}
      />
    </div>

    <div
      style={{
        background: '#222',
        padding: '2rem',
        color: '#FFF',
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <Radio
          label="Single Radio (Dark)"
          name="SingleRadioDark"
          id="SingleRadioDark"
          theme="dark"
        />
        <Radio
          label="Disabled Radio (Dark)"
          name="DisabledRadioDark"
          id="DisabledRadioDark"
          disabled
          theme="dark"
        />
      </div>
      <RadioSet
        label="Radio Set Dark Themed"
        id="RadioSet4"
        name="radioSet4"
        radios={generateDemoOptions(4)}
        theme="dark"
      />
    </div>
  </Story>
));
