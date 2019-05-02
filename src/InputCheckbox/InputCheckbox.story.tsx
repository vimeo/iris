import React from 'react';
import { InputCheckbox as IC } from '../';
import { storiesOf } from '@storybook/react';
import { Story } from '../../.storybook/ui/Story';
import styled from 'styled-components';

const InputCheckbox = styled(IC)`
  margin: 1rem 0;
`;

storiesOf(`components|Inputs/Checkbox`, module)
  .add('light', () => (
    <Story title="Checkbox">
      <InputCheckbox
        label="Checkbox 1 (Medium)"
        name="demoCheckbox1"
        id="Checkbox1"
        value="1"
      />
      <InputCheckbox
        label="Checkbox 2 (Medium)"
        name="demoCheckbox2"
        id="Checkbox2"
        value="2"
      />
      <InputCheckbox
        label="Checkbox 3 has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
        name="demoCheckbox3"
        id="Checkbox3"
        value="3"
      />
      <InputCheckbox
        label="Errored Field"
        name="demoCheckbox4"
        format="negative"
        id="Checkbox4"
        value="4"
        required
      />
      <InputCheckbox
        label="DisabledField"
        name="demoCheckboxDisabled"
        id="CheckboxDisabled"
        value="disabled"
        disabled
      />
      <InputCheckbox
        label="Checkbox has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
        name="demoCheckbox5"
        errorMsg="This field is required!"
        format="negative"
        id="Checkbox5"
        value="5"
        required
      />
      <InputCheckbox
        label="Hidden Label"
        hideLabel
        name="demoCheckbox6"
        id="Checkbox6"
        value="6"
      />
    </Story>
  ))
  .add('dark', () => (
    <Story title="Checkbox">
      <div style={{ background: '#222', padding: '2rem' }}>
        <InputCheckbox
          label="Checkbox 1 (Medium)"
          name="demoCheckbox1"
          id="Checkbox1Dark"
          value="1"
          theme="dark"
        />
      </div>
    </Story>
  ));
