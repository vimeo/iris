import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputRadioSet as IRS } from './InputRadioSet';
import { InputRadio as IR } from '../InputRadio/InputRadio';
import { Story } from '../../.storybook/ui/Story';
import styled from 'styled-components';
import { InputRadioWrapperStyled } from '../InputRadio/InputRadioStyled';

const InputRadio = styled(IR)`
  margin: 0.5rem 0;
`;
const InputRadioSet = styled(IRS)`
  margin: 0 0 2rem;

  & > ${InputRadioWrapperStyled} {
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

const componentName = 'Inputs';

storiesOf(`components|${componentName}`, module).add(
  'radio select',
  () => (
    <Story title="Input Radio" subTitle="Radio">
      <div style={{ marginBottom: '2rem' }}>
        <InputRadio
          label="Single Radio"
          name="SingleRadio"
          id="SingleRadio"
        />
        <InputRadio
          label="Disabled Radio"
          name="DisabledRadio"
          id="DisabledRadio"
          disabled
        />
      </div>
      <div>
        <InputRadioSet
          label="Radio Set 1"
          id="RadioSet1"
          name="radioSet1"
          radios={generateDemoOptions(1)}
        />
        <InputRadioSet
          format="negative"
          label="Radio Set 2 (Errored)"
          id="RadioSet2"
          name="radioSet2"
          errorMsg="Please select one of these inputs"
          radios={generateDemoOptions(2)}
        />
        <InputRadioSet
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
          <InputRadio
            label="Single Radio (Dark)"
            name="SingleRadioDark"
            id="SingleRadioDark"
            theme="dark"
          />
          <InputRadio
            label="Disabled Radio (Dark)"
            name="DisabledRadioDark"
            id="DisabledRadioDark"
            disabled
            theme="dark"
          />
        </div>
        <InputRadioSet
          label="Radio Set Dark Themed"
          id="RadioSet4"
          name="radioSet4"
          radios={generateDemoOptions(4)}
          theme="dark"
        />
      </div>
    </Story>
  ),
);
