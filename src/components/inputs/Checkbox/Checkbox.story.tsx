import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Checkbox as C } from './Checkbox';
import { CheckboxSet } from './CheckboxSet';

import { Story } from '../../../storybook';
import { Header } from '../../../typography';

const Checkbox = styled(C)`
  margin: 1rem 0;
`;

storiesOf(`Components|inputs/Marks/`, module)
  .add('Checkbox', () => (
    <Story title="Checkbox">
      <Checkbox
        label="Checkbox 1 (Medium)"
        name="demoCheckbox1"
        id="Checkbox1"
        value="1"
      />
      <Checkbox
        label="Checkbox 2 (Medium)"
        name="demoCheckbox2"
        id="Checkbox2"
        value="2"
      />
      <Checkbox
        label="Checkbox 3 has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
        name="demoCheckbox3"
        id="Checkbox3"
        value="3"
      />
      <Checkbox
        label="Errored Field"
        name="demoCheckbox4"
        status="negative"
        id="Checkbox4"
        value="4"
        required
      />
      <Checkbox
        label="DisabledField"
        name="demoCheckboxDisabled"
        id="CheckboxDisabled"
        value="disabled"
        disabled
      />
      <Checkbox
        label="Checkbox has a very long label. Sometimes we need to tell people that they must agree to terms and conditions before they submit a form."
        name="demoCheckbox5"
        status="negative"
        id="Checkbox5"
        value="5"
        required
      />
      <Checkbox
        label={false}
        name="demoCheckbox6"
        id="Checkbox6"
        value="6"
      />
    </Story>
  ))
  .add('Checkbox Set', () => (
    <Story title="Checkbox Set">
      <Header size="5">
        The default {'<CheckboxSet />'} will set children deselect
        children, but it will not select them.
      </Header>

      <CheckboxSet label="default">
        <Checkbox label="default" />
        <Checkbox label="default" />
      </CheckboxSet>
      <br />
      <Header size="5">
        The `coupled` prop will override the children when the parent
        value changes.
      </Header>
      <CheckboxSet label="coupled" coupled>
        <Checkbox label="coupled" />
        <Checkbox label="coupled" />
      </CheckboxSet>
      <br />
      <Header size="5">
        The `toggled` prop will hide the children unless the parent is
        selected.
      </Header>
      <CheckboxSet label="toggled" toggled>
        <Checkbox label="toggled" />
        <Checkbox label="toggled" />
      </CheckboxSet>
    </Story>
  ));
