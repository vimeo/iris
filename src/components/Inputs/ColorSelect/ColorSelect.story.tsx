import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { ColorSelect } from './ColorSelect';

const $ColorPicker = styled(ColorSelect)`
  margin: 0 1rem 1rem 0;
`;

import { Story } from '../../../storybook';
import { ParagraphMd } from '../../../legacy';

const componentName = 'ColorSelect';

storiesOf(`components|Inputs`, module).add('ColorSelect', () => (
  <Story title={componentName} subTitle="Playground">
    <ParagraphMd>Color picker below.</ParagraphMd>
    <ColorSelect
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
