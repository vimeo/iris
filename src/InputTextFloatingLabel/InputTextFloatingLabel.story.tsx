import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../.storybook/ui/Story';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';

import { InputTextFloatingLabel } from './InputTextFloatingLabel';

const $InputTextFloatingLabel = styled(InputTextFloatingLabel)`
  margin: 0 0 2rem;
`;

const componentName = 'Inputs';

storiesOf(`components|${componentName}`, module).add(
  'text floating label',
  () => (
    <Story title="Input Text Floating Label" subTitle="Toggle">
      <div>
        <$InputTextFloatingLabel
          id="id"
          label="password"
          value={text('value', 'sample_pass')}
          type="password"
          errorMsg="error message"
          helperMsg="helper message"
          format="neutral"
        />
      </div>
    </Story>
  ),
);
