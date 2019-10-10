import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Story } from '../../../storybook';

import { InputTextFloatingLabel } from './InputTextFloatingLabel';

const $InputTextFloatingLabel = styled(InputTextFloatingLabel)`
  margin: 0 0 2rem;
  span[role='alert'] {
    color: red;
  }
`;

storiesOf(`components|inputs`, module).add(
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
        <$InputTextFloatingLabel
          id="id"
          label="disabled"
          type="text"
          format="neutral"
          disabled={true}
        />
      </div>
    </Story>
  ),
);
