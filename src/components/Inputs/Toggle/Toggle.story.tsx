import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Toggle } from './Toggle';

import { Header3 } from '../../../legacy';
import { Story } from '../../../storybook';

const $Toggle = styled(Toggle)`
  margin: 0 0 2rem;
`;

const componentName = 'Inputs';

storiesOf(`components|${componentName}`, module).add('toggle', () => (
  <Story title="Input Toggle" subTitle="Toggle">
    <div>
      <$Toggle
        label="Toggle (medium)"
        name="demoToggleMd"
        id="ToggleMd"
        value="1"
      />
      <$Toggle
        label="Toggle (Large)"
        name="demoToggleLg"
        id="ToggleLg"
        size="lg"
        value="2"
      />
      <$Toggle
        label="Errored Toggle (Large)"
        name="demoToggleError"
        errorMsg="This field is required."
        format="negative"
        id="ToggleLgError"
        size="lg"
        value="3"
        required
      />
      <$Toggle
        label="Disabled(Large)"
        name="demoToggleDisabled"
        id="ToggleLgDisabled"
        size="lg"
        value="4"
        disabled
      />

      <Header3>Hidden Labels</Header3>
      <$Toggle
        label="Toggle Hidden Label"
        name="demoToggleMdHidden"
        id="ToggleMdHidden"
        value="1"
        hideLabel
      />
    </div>
    <div
      style={{
        background: '#222',
        padding: '2rem',
        color: '#FFF',
      }}
    >
      <$Toggle
        label="Toggle (Large)"
        name="demoToggleLg"
        id="ToggleLgDark"
        value="1"
        theme="dark"
        size="lg"
      />
      <$Toggle
        label="Toggle (medium)"
        name="demoToggleMd"
        id="ToggleMdDark"
        value="1"
        theme="dark"
      />
    </div>
  </Story>
));
