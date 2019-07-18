import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { InputColorPicker } from './InputColorPicker';

const $ColorPicker = styled(InputColorPicker)`
  margin: 0 1rem 1rem 0;
`;

import { Story } from '../../.storybook/ui/Story';
import { ParagraphMd } from '../Type';

const componentName = 'InputColorPicker';

storiesOf(`components|Inputs`, module).add('InputColorPicker', () => (
  <Story title={componentName} subTitle="Playground">
    <ParagraphMd>Color picker below.</ParagraphMd>
    <InputColorPicker
      defaultColor="#00adef"
      resetButtonLabel="Reset"
      resetColor="#00adef"
      label="Color picker"
      id="colorpicker"
      onChangeColor={(hex: string) => {
        // Do something on change
      }}
    />
  </Story>
));
